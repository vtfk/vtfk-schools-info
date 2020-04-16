'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(26, schools.length, 'There are 26 schools')
