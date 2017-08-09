'use strict' // eslint-disable-line strict

module.exports = {
    CasinocoinAPI: require('./api').CasinocoinAPI,
    // Broadcast api is experimental
    CasinocoinAPIBroadcast: require('./broadcast').CasinocoinAPIBroadcast
}