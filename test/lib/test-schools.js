'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(24, schools.length, 'There are 24 schools')
