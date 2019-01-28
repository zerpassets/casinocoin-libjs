const utils = require('./utils')
import {Prepare, KYCSet} from './types'

function createKYCSetTransaction(kyc: KYCSet): Object {
  // convert verifications to 32 byte hex if necessary
  const verifications = []
  if(kyc.verifications){
      kyc.verifications.forEach(element => {
          if(element.indexOf('-') !== -1 && element.length === 36){
            // remove dashes
            const hexUUID = element.replace(/-/g, '')
            verifications.push(hexUUID.toUpperCase())
          } else if(element.length === 32) {
            verifications.push(element.toUpperCase())
          } else {
            console.log('invalid UUID: ' + element)
          }
      })
  }
  const txJSON: Object = {
      TransactionType: 'KYCSet',
      Account: kyc.kycAccount,
      Verifications: verifications,
      Destination: kyc.destination
  }
  // set or clear KYC flag
  if(kyc.verified){
    (txJSON as any).SetFlag = 1
  } else {
    (txJSON as any).ClearFlag = 1
  }
  return txJSON
}

function prepareKYCSet(kyc: KYCSet): Promise < Prepare > {
  // validate.prepareKYCSet({ address, kyc, instructions })
  const txJSON = createKYCSetTransaction(kyc)
  return utils.prepareTransaction(txJSON, this, {})
}

export default prepareKYCSet
