const groups = require('./data/groups.json')

module.exports = id => {
  if (!id) {
    return groups
  } else {
    return groups[id.toString().toUpperCase()]
  }
}
