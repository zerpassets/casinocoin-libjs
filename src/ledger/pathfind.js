/* @flow */
'use strict' // eslint-disable-line strict
const _ = require('lodash')
const BigNumber = require('bignumber.js')
const utils = require('./utils')
const parsePathfind = require('./parse/pathfind')
const { validate, toCasinocoindAmount } = utils.common
const NotFoundError = utils.common.errors.NotFoundError
const ValidationError = utils.common.errors.ValidationError
import type { Connection } from '../common/connection'
import type { CasinocoindAmount } from '../common/types.js'
import type { GetPaths, PathFind, CasinocoindPathsResponse, PathFindRequest }
from './pathfind-types.js'


function addParams(request: PathFindRequest, result: CasinocoindPathsResponse) {
    return _.defaults(_.assign({}, result, {
        source_account: request.source_account,
        source_currencies: request.source_currencies
    }), { destination_amount: request.destination_amount })
}

function requestPathFind(connection: Connection, pathfind: PathFind): Promise {
    const destinationAmount = _.assign({ value: -1 }, pathfind.destination.amount)
    const request: PathFindRequest = {
        command: 'casinocoin_path_find',
        source_account: pathfind.source.address,
        destination_account: pathfind.destination.address,
        destination_amount: toCasinocoindAmount(destinationAmount)
    }
    if (typeof request.destination_amount === 'object' &&
        !request.destination_amount.issuer) {
        // Convert blank issuer to sender's address
        // (Casinocoin convention for 'any issuer')
        // https://casinocoin.com/build/transactions/
        //     #special-issuer-values-for-sendmax-and-amount
        // https://casinocoin.com/build/casinocoin-rest/#counterparties-in-payments
        request.destination_amount.issuer = request.destination_account
    }
    if (pathfind.source.currencies && pathfind.source.currencies.length > 0) {
        request.source_currencies = pathfind.source.currencies.map(amount =>
            _.omit(toCasinocoindAmount(amount), 'value'))
    }
    if (pathfind.source.amount) {
        if (pathfind.destination.amount.value !== undefined) {
            throw new ValidationError('Cannot specify both source.amount' +
                ' and destination.amount.value in getPaths')
        }
        request.send_max = toCasinocoindAmount(pathfind.source.amount)
        if (request.send_max.currency && !request.send_max.issuer) {
            request.send_max.issuer = pathfind.source.address
        }
    }

    return connection.request(request).then(paths => addParams(request, paths))
}

function addDirectCscPath(paths: CasinocoindPathsResponse, cscBalance: string): CasinocoindPathsResponse {
    // Add CSC "path" only if the source acct has enough CSC to make the payment
    const destinationAmount = paths.destination_amount
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
): Promise {
    if (isCasinocoindIOUAmount(paths.destination_amount) ||
        !_.includes(paths.destination_currencies, 'CSC')) {
        return Promise.resolve(paths)
    }
    return utils.getCSCBalance(connection, address, undefined).then(
        cscBalance => addDirectCscPath(paths, cscBalance))
}

function filterSourceFundsLowPaths(pathfind: PathFind,
    paths: CasinocoindPathsResponse
): CasinocoindPathsResponse {
    if (pathfind.source.amount &&
        pathfind.destination.amount.value === undefined && paths.alternatives) {
        paths.alternatives = _.filter(paths.alternatives, alt => {
            return alt.source_amount &&
                pathfind.source.amount &&
                new BigNumber(alt.source_amount.value).eq(pathfind.source.amount.value)
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

function getPaths(pathfind: PathFind): Promise < GetPaths > {
    validate.getPaths({ pathfind })

    const address = pathfind.source.address
    return requestPathFind(this.connection, pathfind).then(paths =>
            conditionallyAddDirectCSCPath(this.connection, address, paths)
        )
        .then(paths => filterSourceFundsLowPaths(pathfind, paths))
        .then(paths => formatResponse(pathfind, paths))
}

module.exports = getPaths