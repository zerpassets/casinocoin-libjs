/* @flow */
'use strict' // eslint-disable-line strict
const _ = require('lodash')
const utils = require('./utils')
const kycFlag = utils.common.txFlags.KYC
const toCasinocoindAmount = utils.common.toCasinocoindAmount
const { validate, iso8601ToCasinocoinTime } = utils.common
import type { Instructions, Prepare } from './types.js'
import type { KYCSet } from '../ledger/transaction-types.js'

function createKYCSetTransaction(kyc: KYCSet): Object {
    // convert verifications to 32 byte hex if necessary
    var verifications = [];
    if(kyc.verifications){
        kyc.verifications.forEach(element => {
            if(element.indexOf("-") !== -1 && element.length == 36){
                // remove dashes
                var hexUUID = element.replace(/-/g, "")
                verifications.push(hexUUID.toUpperCase())
            } else if(element.length == 32) {
                verifications.push(element.toUpperCase())
            } else {
                console.log("invalid UUID: " + element);
            }
        });
    }
    const txJSON: Object = {
        TransactionType: 'KYCSet',
        Account: kyc.kycAccount,
        Verifications: verifications,
        Destination: kyc.destination
    }
    // set or clear KYC flag
    if(kyc.verified){
        txJSON.SetFlag = 1
    } else {
        txJSON.ClearFlag = 1
    }
    return txJSON
}

function prepareKYCSet(kyc: KYCSet): Promise < Prepare > {
    // validate.prepareKYCSet({ address, kyc, instructions })
    var txJSON = createKYCSetTransaction(kyc);
    return utils.prepareTransaction(txJSON, this, {});
}

module.exports = prepareKYCSet