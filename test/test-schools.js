'use strict'

const tap = require('tap')
const schools = require('../lib/data/schools.json')

tap.equal(14, schools.length, 'There are 14 schools')
