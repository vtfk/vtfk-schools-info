const supportedKeys = require('./data/supported-keys.json')

module.exports = options => Object.keys(options).filter(option => supportedKeys.includes(option))
