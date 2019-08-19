const schools = require('../lib/data/schools.json')
const groups = require('./data/basisgrupper.json')
const basic = groups.reduce((prev, curr) => {
  if (!Object.prototype.hasOwnProperty.call(prev, curr.Enhet)) {
    prev[curr.Enhet] = []
  }
  prev[curr.Enhet].push({
    id: curr.Basisgruppe,
    name: curr.Basisgruppenavn
  })
  return prev
}, {})

// NOMVS fix
schools.push({ shortName: 'NOMVS' })

const data = schools.reduce((prev, current) => {
  prev[current.shortName] = basic[current.shortName]
  return prev
}, {})

console.log(JSON.stringify(data, null, 2))
