import {validate} from '../common'
import {FormattedLedger, parseLedger} from './parse/ledger'
import {CasinocoinAPI} from '../api'

export type GetLedgerOptions = {
  ledgerHash?: string,
  ledgerVersion?: number,
  includeAllData?: boolean,
  includeTransactions?: boolean,
  includeState?: boolean
}

async function getLedger(
  this: CasinocoinAPI, options: GetLedgerOptions = {}
): Promise<FormattedLedger> {
  // 1. Validate
  validate.getLedger({options})
  // 2. Make Request
  const response = await this.request('ledger', {
    ledger_hash: options.ledgerHash,
    ledger_index: options.ledgerVersion || 'validated',
    expand: options.includeAllData,
    transactions: options.includeTransactions,
    accounts: options.includeState
  })
  // 3. Return Formatted Response
  return parseLedger(response.ledger)
}

export default getLedger
