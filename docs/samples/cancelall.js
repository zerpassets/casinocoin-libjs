'use strict';
const CasinocoinAPI = require('../../dist/npm').CasinocoinAPI; // require('casinocoin-libjs')

const address = 'cHb9CJAWyB4cj91VRWn96DkukG4bwdtyTh';
const secret = '';

const api = new CasinocoinAPI({ server: 'ws://wst02.casinocoin.org:7007' });
const instructions = { maxLedgerVersionOffset: 5 };

function fail(message) {
    console.error(message);
    process.exit(1);
}

function cancelOrder(orderSequence) {
    console.log('Cancelling order: ' + orderSequence.toString());
    return api.prepareOrderCancellation(address, { orderSequence }, instructions)
        .then(prepared => {
            const signing = api.sign(prepared.txJSON, secret);
            return api.submit(signing.signedTransaction);
        });
}

function cancelAllOrders(orderSequences) {
    if (orderSequences.length === 0) {
        return Promise.resolve();
    }
    const orderSequence = orderSequences.pop();
    return cancelOrder(orderSequence).then(() => cancelAllOrders(orderSequences));
}

api.connect().then(() => {
    console.log('Connected...');
    return api.getOrders(address).then(orders => {
        const orderSequences = orders.map(order => order.properties.sequence);
        return cancelAllOrders(orderSequences);
    }).then(() => process.exit(0));
}).catch(fail);