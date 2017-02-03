'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')
const getSchools = require('../../lib/get-schools')
const options = {
  shortName: 'dalvs'
}

tap.equal(schools.length, getSchools().length, 'It returns all schools on empty')

tap.equal(1, getSchools(options).length, 'It returns 1 school for dalvs')
