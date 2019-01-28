const CasinocoinAPI = require('../dist/npm').CasinocoinAPI
const api = new CasinocoinAPI({server: 'wss://s.altnet.casinocointest.net:51233'})

parseAccountFlags()

async function parseAccountFlags() {
  await api.connect()
  const account_info = await api.request('account_info', {account: 'ca7ZGLJ7eHB63GCaWJa4fBM5896bgaFncc'})
  const flags = api.parseAccountFlags(account_info.account_data.Flags)
  console.log(JSON.stringify(flags, null, 2))
}
