import * as _ from 'lodash'
import BigNumber from 'bignumber.js'
import {getCSCBalance, renameCounterpartyToIssuer} from './utils'
import {
  validate,
  toCasinocoindAmount,
  errors,
  cscToDrops,
  dropsToCsc
} from '../common'
import {Connection} from '../common'
import parsePathfind from './parse/pathfind'
import {CasinocoindAmount, Amount} from '../common/types/objects'
import {
  GetPaths, PathFind, CasinocoindPathsResponse, PathFindRequest
} from './pathfind-types'
const NotFoundError = errors.NotFoundError
const ValidationError = errors.ValidationError


function addParams(request: PathFindRequest, result: CasinocoindPathsResponse
): CasinocoindPathsResponse {
  return _.defaults(_.assign({}, result, {
    source_account: request.source_account,
    source_currencies: request.source_currencies
  }), {destination_amount: request.destination_amount})
}

function requestPathFind(connection: Connection, pathfind: PathFind
): Promise<CasinocoindPathsResponse> {
  const destinationAmount: Amount = _.assign(
    {
      // This is converted back to drops by toCasinocoindAmount()
      value: pathfind.destination.amount.currency === 'CSC' ?
        dropsToCsc('-1') : '-1'
    },
    pathfind.destination.amount
  )
  const request: PathFindRequest = {
    command: 'ripple_path_find',
    source_account: pathfind.source.address,
    destination_account: pathfind.destination.address,
    destination_amount: toCasinocoindAmount(destinationAmount)
  }
  if (typeof request.destination_amount === 'object'
      && !request.destination_amount.issuer) {
    // Convert blank issuer to sender's address
    // (Casinocoin convention for 'any issuer')
    // https://casinocoin.org/build/transactions/
    //     #special-issuer-values-for-sendmax-and-amount
    // https://casinocoin.org/build/ripple-rest/#counterparties-in-payments
    request.destination_amount.issuer = request.destination_account
  }
  if (pathfind.source.currencies && pathfind.source.currencies.length > 0) {
    request.source_currencies = pathfind.source.currencies.map(
      amount => renameCounterpartyToIssuer(amount))
  }
  if (pathfind.source.amount) {
    if (pathfind.destination.amount.value !== undefined) {
      throw new ValidationError('Cannot specify both source.amount'
        + ' and destination.amount.value in getPaths')
    }
    request.send_max = toCasinocoindAmount(pathfind.source.amount)
    if (typeof request.send_max !== 'string' && !request.send_max.issuer) {
      request.send_max.issuer = pathfind.source.address
    }
  }

  return connection.request(request).then(paths => addParams(request, paths))
}

function addDirectCscPath(paths: CasinocoindPathsResponse, cscBalance: string
): CasinocoindPathsResponse {
  // Add CSC "path" only if the source acct has enough CSC to make the payment
  const destinationAmount = paths.destination_amount
  // @ts-ignore: destinationAmount can be a currency amount object! Fix!
  if ((new BigNumber(cscBalance)).greaterThanOrEqualTo(destinationAmount)) {
    paths.alternatives.unshift({
      paths_computed: [],
      source_amount: paths.destination_amount
    })
  }
  return paths
}

function isCasinocoindIOUAmount(amount: CasinocoindAmount) {
  // casinocoind CSC amounts are specified as decimal strings
  return (typeof amount === 'object') &&
    amount.currency && (amount.currency !== 'CSC')
}

function conditionallyAddDirectCSCPath(connection: Connection, address: string,
  paths: CasinocoindPathsResponse
): Promise<CasinocoindPathsResponse> {
  if (isCasinocoindIOUAmount(paths.destination_amount)
      || !_.includes(paths.destination_currencies, 'CSC')) {
    return Promise.resolve(paths)
  }
  return getCSCBalance(connection, address, undefined).then(
    cscBalance => addDirectCscPath(paths, cscBalance))
}

function filterSourceFundsLowPaths(pathfind: PathFind,
  paths: CasinocoindPathsResponse
): CasinocoindPathsResponse {
  if (pathfind.source.amount &&
      pathfind.destination.amount.value === undefined && paths.alternatives) {
    paths.alternatives = _.filter(paths.alternatives, alt => {
      if (!alt.source_amount) {
        return false
      }
      const pathfindSourceAmountValue = new BigNumber(
        pathfind.source.amount.currency === 'CSC' ?
        cscToDrops(pathfind.source.amount.value) :
        pathfind.source.amount.value)
      const altSourceAmountValue = new BigNumber(
        typeof alt.source_amount === 'string' ?
        alt.source_amount :
        alt.source_amount.value
      )
      return altSourceAmountValue.eq(pathfindSourceAmountValue)
    })
  }
  return paths
}

function formatResponse(pathfind: PathFind, paths: CasinocoindPathsResponse) {
  if (paths.alternatives && paths.alternatives.length > 0) {
    return parsePathfind(paths)
  }
  if (paths.destination_currencies !== undefined &&
      !_.includes(paths.destination_currencies,
        pathfind.destination.amount.currency)) {
    throw new NotFoundError('No paths found. ' +
      'The destination_account does not accept ' +
      pathfind.destination.amount.currency + ', they only accept: ' +
      paths.destination_currencies.join(', '))
  } else if (paths.source_currencies && paths.source_currencies.length > 0) {
    throw new NotFoundError('No paths found. Please ensure' +
      ' that the source_account has sufficient funds to execute' +
      ' the payment in one of the specified source_currencies. If it does' +
      ' there may be insufficient liquidity in the network to execute' +
      ' this payment right now')
  } else {
    throw new NotFoundError('No paths found.' +
      ' Please ensure that the source_account has sufficient funds to' +
      ' execute the payment. If it does there may be insufficient liquidity' +
      ' in the network to execute this payment right now')
  }
}

function getPaths(pathfind: PathFind): Promise<GetPaths> {
  validate.getPaths({pathfind})

  const address = pathfind.source.address
  return requestPathFind(this.connection, pathfind).then(paths =>
    conditionallyAddDirectCSCPath(this.connection, address, paths)
  )
    .then(paths => filterSourceFundsLowPaths(pathfind, paths))
    .then(paths => formatResponse(pathfind, paths))
}

export default getPaths
