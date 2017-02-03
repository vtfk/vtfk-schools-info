'use strict'

const schools = require('./data/schools.json')

module.exports = options => {
  if (!options) {
    return schools
  } else {
    const key = Object.keys(options)[0]
    const value = options[key]
    const pattern = new RegExp(value, 'i')

    return schools.filter(school => pattern.test(school[key]))
  }
}
