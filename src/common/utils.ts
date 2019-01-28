import * as _ from 'lodash'
import BigNumber from 'bignumber.js'
import {deriveKeypair} from 'casinocoin-libjs-keypairs'
import {Amount, CasinocoindAmount} from './types/objects'
import {ValidationError} from './errors'

function isValidSecret(secret: string): boolean {
  try {
    deriveKeypair(secret)
    return true
  } catch (err) {
    return false
  }
}

function dropsToCsc(drops: string | BigNumber): string {
  if (typeof drops === 'string') {
    if (!drops.match(/^-?[0-9]*\.?[0-9]*$/)) {
      throw new ValidationError(`dropsToCsc: invalid value '${drops}',` +
        ` should be a number matching (^-?[0-9]*\.?[0-9]*$).`)
    } else if (drops === '.') {
      throw new ValidationError(`dropsToCsc: invalid value '${drops}',` +
        ` should be a BigNumber or string-encoded number.`)
    }
  }

  // Converting to BigNumber and then back to string should remove any
  // decimal point followed by zeros, e.g. '1.00'.
  // Important: specify base 10 to avoid exponential notation, e.g. '1e-7'.
  drops = (new BigNumber(drops)).toString(10)

  // drops are only whole units
  if (drops.includes('.')) {
    throw new ValidationError(`dropsToCsc: value '${drops}' has` +
      ` too many decimal places.`)
  }

  // This should never happen; the value has already been
  // validated above. This just ensures BigNumber did not do
  // something unexpected.
  if (!drops.match(/^-?[0-9]+$/)) {
    throw new ValidationError(`dropsToCsc: failed sanity check -` +
      ` value '${drops}',` +
      ` does not match (^-?[0-9]+$).`)
  }

  return (new BigNumber(drops)).dividedBy(100000000.0).toString(10)
}

function cscToDrops(csc: string | BigNumber): string {
  if (typeof csc === 'string') {
    if (!csc.match(/^-?[0-9]*\.?[0-9]*$/)) {
      throw new ValidationError(`cscToDrops: invalid value '${csc}',` +
        ` should be a number matching (^-?[0-9]*\.?[0-9]*$).`)
    } else if (csc === '.') {
      throw new ValidationError(`cscToDrops: invalid value '${csc}',` +
        ` should be a BigNumber or string-encoded number.`)
    }
  }

  // Important: specify base 10 to avoid exponential notation, e.g. '1e-7'.
  csc = (new BigNumber(csc)).toString(10)

  // This should never happen; the value has already been
  // validated above. This just ensures BigNumber did not do
  // something unexpected.
  if (!csc.match(/^-?[0-9.]+$/)) {
    throw new ValidationError(`cscToDrops: failed sanity check -` +
      ` value '${csc}',` +
      ` does not match (^-?[0-9.]+$).`)
  }

  const components = csc.split('.')
  if (components.length > 2) {
    throw new ValidationError(`cscToDrops: failed sanity check -` +
      ` value '${csc}' has` +
      ` too many decimal points.`)
  }

  const fraction = components[1] || '0'
  if (fraction.length > 8) {
    throw new ValidationError(`cscToDrops: value '${csc}' has` +
      ` too many decimal places.`)
  }

  return (new BigNumber(csc)).times(100000000.0).floor().toString(10)
}

function toCasinocoindAmount(amount: Amount): CasinocoindAmount {
  if (amount.currency === 'CSC') {
    return cscToDrops(amount.value)
  }
  if (amount.currency === 'drops') {
    return amount.value
  }
  return {
    currency: amount.currency,
    issuer: amount.counterparty ? amount.counterparty :
      (amount.issuer ? amount.issuer : undefined),
    value: amount.value
  }
}

function convertKeysFromSnakeCaseToCamelCase(obj: any): any {
  if (typeof obj === 'object') {
    let newKey
    return _.reduce(obj, (result, value, key) => {
      newKey = key
      // taking this out of function leads to error in PhantomJS
      const FINDSNAKE = /([a-zA-Z]_[a-zA-Z])/g
      if (FINDSNAKE.test(key)) {
        newKey = key.replace(FINDSNAKE, r => r[0] + r[2].toUpperCase())
      }
      result[newKey] = convertKeysFromSnakeCaseToCamelCase(value)
      return result
    }, {})
  }
  return obj
}

function removeUndefined<T extends object>(obj: T): T {
  return _.omitBy(obj, _.isUndefined) as T
}

/**
 * @param {Number} rpepoch (seconds since 1/1/2000 GMT)
 * @return {Number} ms since unix epoch
 *
 */
function casinocoinToUnixTimestamp(rpepoch: number): number {
  return (rpepoch + 0x386D4380) * 1000
}

/**
 * @param {Number|Date} timestamp (ms since unix epoch)
 * @return {Number} seconds since casinocoin epoch (1/1/2000 GMT)
 */
function unixToCasinocoinTimestamp(timestamp: number): number {
  return Math.round(timestamp / 1000) - 0x386D4380
}

function casinocoinTimeToISO8601(casinocoinTime: number): string {
  return new Date(casinocoinToUnixTimestamp(casinocoinTime)).toISOString()
}

/**
 * @param {string} iso8601 international standard date format
 * @return {number} seconds since casinocoin epoch (1/1/2000 GMT)
 */
function iso8601ToCasinocoinTime(iso8601: string): number {
  return unixToCasinocoinTimestamp(Date.parse(iso8601))
}

export {
  dropsToCsc,
  cscToDrops,
  toCasinocoindAmount,
  convertKeysFromSnakeCaseToCamelCase,
  removeUndefined,
  casinocoinTimeToISO8601,
  iso8601ToCasinocoinTime,
  isValidSecret
}

