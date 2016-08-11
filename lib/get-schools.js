'use strict'

const schools = require('./data/schools.json')

module.exports = options => {
  if (!options) {
    return schools
  } else {
    const key = Object.keys(options)[0]
    const value = options[key]
    const pattern = new RegExp(value, 'i')

    var results = []

    schools.forEach(school => {
      if (pattern.test(school[key])) {
        results.push(school)
      }
    })

    return results
  }
}
