/* @flow */
'use strict' // eslint-disable-line strict
const utils = require('../utils')
import type { Amount, CasinocoindAmount } from '../../common/types.js'


function parseAmount(amount: CasinocoindAmount): Amount {
    if (typeof amount === 'string') {
        return {
            currency: 'CSC',
            value: utils.common.dropsToCsc(amount)
        }
    }
    return {
        currency: amount.currency,
        value: amount.value,
        counterparty: amount.issuer
    }
}

module.exports = parseAmount