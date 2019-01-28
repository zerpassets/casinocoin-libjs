import keypairs = require('casinocoin-libjs-keypairs')

function convertStringToHex(inputString: string) {
  if(inputString !== undefined && inputString.length > 0){
      return new Buffer(inputString, 'utf8').toString('hex').toUpperCase()
  } else {
      return ''
  }
}

function signMessage(msg: string, secret: string): Object {
  const hexMessage = convertStringToHex(msg)
  const kp = keypairs.deriveKeypair(secret)
  if(hexMessage !== undefined){
      const signature = keypairs.signMessage(hexMessage, kp.privateKey)
      return {
          message: msg,
          public_key: kp.publicKey,
          signature: signature
      }
  } else {
      return {
          message: msg,
          public_key: kp.privateKey,
          error: 'Error signing message'
      }
  }
}

export default signMessage
