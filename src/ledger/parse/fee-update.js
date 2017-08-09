'use strict' // eslint-disable-line strict
const BigNumber = require('bignumber.js')
const { dropsToCsc } = require('./utils')

function parseFeeUpdate(tx: Object) {
    const baseFeeDrops = (new BigNumber(tx.BaseFee, 16)).toString()
    return {
        baseFeeCSC: dropsToCsc(baseFeeDrops),
        referenceFeeUnits: tx.ReferenceFeeUnits,
        reserveBaseCSC: dropsToCsc(tx.ReserveBase),
        reserveIncrementCSC: dropsToCsc(tx.ReserveIncrement)
    }
}

module.exports = parseFeeUpdate