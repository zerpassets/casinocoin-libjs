'use strict' // eslint-disable-line strict
const utils = require('./utils')

module.exports = {
    Connection: require('./connection'),
    constants: require('./constants'),
    errors: require('./errors'),
    validate: require('./validate'),
    txFlags: require('./txflags').txFlags,
    serverInfo: require('./serverinfo'),
    dropsToCsc: utils.dropsToCsc,
    cscToDrops: utils.cscToDrops,
    toCasinocoindAmount: utils.toCasinocoindAmount,
    generateAddress: utils.generateAddress,
    generateAddressAPI: utils.generateAddressAPI,
    removeUndefined: utils.removeUndefined,
    convertKeysFromSnakeCaseToCamelCase: utils.convertKeysFromSnakeCaseToCamelCase,
    iso8601ToCasinocoinTime: utils.iso8601ToCasinocoinTime,
    casinocoinTimeToISO8601: utils.casinocoinTimeToISO8601,
    isValidSecret: utils.isValidSecret
}