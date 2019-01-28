'use strict';
const CasinocoinAPI = require('../../src').CasinocoinAPI; // require('casinocoin-libjs')

const api = new CasinocoinAPI({ server: 'ws://wst02.casinocoin.org:7007' });

api.connect().then(() => {
    api.getServerInfo().then(info => console.log(info));
}).catch(error => {
	console.log(JSON.stringify(error));
});
