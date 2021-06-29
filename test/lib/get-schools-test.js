const tap = require('tap')
const schools = require('../../lib/data/schools.json')
const getSchools = require('../../lib/get-schools')
const yffOptions = {
  yff: true
}

tap.equal(schools.length, getSchools().length, 'It returns all schools on empty')

tap.equal(1, getSchools({ shortName: 'NOMV' }).length, 'It returns 1 school for NOMV')

tap.equal(1, getSchools({ shortName: 'HOLV' }).length, 'It returns 1 school for HOLV')

tap.equal(10, getSchools(yffOptions).length, 'It returns 10 schools for yff:true')
