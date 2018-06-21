const getSchools = require('./lib/get-schools')

module.exports = options => {
  return getSchools(options)
}

module.exports.getGroups = require('./lib/get-groups')
