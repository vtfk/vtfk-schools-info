'use strict'

const schools = require('./data/schools.json')
const getValidKeys = require('./get-valid-keys')

module.exports = options => {
  if (!options) {
    return schools
  } else {
    const validKeys = getValidKeys(options)
    if (validKeys.length === 0) return []
    const key = validKeys[0]
    const value = options[key]
    const pattern = new RegExp(value, 'i')

    const exactMatch = schools.filter(school => school[key] === value)
    const patternMatch = schools.filter(school => pattern.test(school[key]))
    return exactMatch.length > 0 ? exactMatch : patternMatch
  }
}
