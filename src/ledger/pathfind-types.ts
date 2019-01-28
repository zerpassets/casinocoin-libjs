
import {Amount, CasinocoindAmount, Adjustment, MaxAdjustment,
  MinAdjustment} from '../common/types/objects'

// Amount where counterparty and value are optional
export type LaxLaxAmount = {
  currency: string,
  value?: string,
  issuer?: string,
  counterparty?: string
}

export type Path = {
  source: Adjustment | MaxAdjustment,
  destination: Adjustment | MinAdjustment,
  paths: string
}

export type GetPaths = Array<Path>

export type PathFind = {
  source: {
    address: string,
    amount?: Amount,
    currencies?: Array<{currency: string, counterparty?:string}>
  },
  destination: {
    address: string,
    amount: LaxLaxAmount
  }
}

export type PathFindRequest = {
  command: string,
  source_account: string,
  destination_amount: CasinocoindAmount,
  destination_account: string,
  source_currencies?: {currency: string, issuer?: string}[],
  send_max?: CasinocoindAmount
}

export type CasinocoindPathsResponse = {
  alternatives: Array<{
    paths_computed: Array<Array<{
      type: number,
      type_hex: string,
      account?: string,
      issuer?: string,
      currency?: string
    }>>,
    source_amount: CasinocoindAmount
  }>,
  type: string,
  destination_account: string,
  destination_amount: CasinocoindAmount,
  destination_currencies?: Array<string>,
  source_account: string,
  source_currencies?: Array<{currency: string}>,
  full_reply?: boolean
}
