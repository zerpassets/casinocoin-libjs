/* @flow */
'use strict' // eslint-disable-line strict
const common = require('../common')
const keypairs = require('casinocoin-libjs-keypairs')
const binary = require('casinocoin-libjs-binary-codec')
const { validate, cscToDrops } = common

function verifyPaymentChannelClaim(channel: string, amount: string,
    signature: string, publicKey: string
): string {
    validate.verifyPaymentChannelClaim({ channel, amount, signature, publicKey })

    const signingData = binary.encodeForSigningClaim({
        channel: channel,
        amount: cscToDrops(amount),
    })
    return keypairs.verify(signingData, signature, publicKey)
}

module.exports = verifyPaymentChannelClaim