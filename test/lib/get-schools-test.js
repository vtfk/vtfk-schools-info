const tap = require('tap')
const schools = require('../../lib/data/schools.json')
const getSchools = require('../../lib/get-schools')
const yffOptions = {
  yff: true
}

tap.equal(schools.length, getSchools().length, 'It returns all schools on empty')

tap.equal(1, getSchools({ shortName: 'dalvs' }).length, 'It returns 1 school for dalvs')

tap.equal(1, getSchools({ shortName: 'hsvs' }).length, 'It returns 1 school for hsvs')

tap.equal(14, getSchools(yffOptions).length, 'It returns 14 schools for yff:true')
