/* @flow */
'use strict' // eslint-disable-line strict
const keypairs = require('casinocoin-libjs-keypairs')

function convertStringToHex(inputString: string) {
    if(inputString !== undefined && inputString.length > 0){
        return new Buffer(inputString, 'utf8').toString('hex').toUpperCase();
    } else {
        return "";
    }
}

function signMessage(msg: string, secret: string): string {
    const hexMessage = convertStringToHex(msg);
    let kp = keypairs.deriveKeypair(secret);
    if(hexMessage !== undefined){
        return keypairs.sign(convertStringToHex(msg), kp.privateKey);
    } else {
        return null;
    }
}

module.exports = signMessage