const keypairs = require('casinocoin-libjs-keypairs')

function convertStringToHex(inputString: string) {
  if(inputString !== undefined && inputString.length > 0){
      return new Buffer(inputString, 'utf8').toString('hex').toUpperCase()
  } else {
      return ''
  }
}

function verifyMessage(msg: string, signature:string, publicKey: string): boolean {
  return keypairs.verifyMessage(convertStringToHex(msg), signature, publicKey)
}

export default verifyMessage
