/* @flow */
'use strict' // eslint-disable-line strict
const keypairs = require('casinocoin-libjs-keypairs')

function hexToString(hex: string) : ? string {
    return hex ? new Buffer(hex, 'hex').toString('utf-8') : undefined
}

function verifyMessage(msg: string, signature:string, publicKey: string): boolean {
    return keypairs.verify(msg, signature, publicKey);
}

module.exports = verifyMessage