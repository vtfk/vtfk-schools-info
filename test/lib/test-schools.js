'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(15, schools.length, 'There are 15 schools')
