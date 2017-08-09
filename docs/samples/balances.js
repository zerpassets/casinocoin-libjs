'use strict';
const CasinocoinAPI = require('../../src').CasinocoinAPI; // require('casinocoin-libjs')

const api = new CasinocoinAPI({ server: 'ws://127.0.0.1:6006' });
//const address = 'cMhWoNXXXBBemk7UuKS2mvZBk355Nbk2YA';
const address1 = 'cHb9CJAWyB4cj91VRWn96DkukG4bwdtyTh';
const address2 = 'cMhWoNXXXBBemk7UuKS2mvZBk355Nbk2YA';

api.connect().then(() => {
    api.getBalances(address1).then(balances => {
        console.log('Address 1: ' + JSON.stringify(balances, null, 2));
    });
    api.getBalances(address2).then(balances => {
	console.log('Address 2: ' + JSON.stringify(balances, null, 2));
        process.exit();
    });
}).catch(error => {
	console.log(JSON.stringify(error));
});
