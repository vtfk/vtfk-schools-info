'use strict'

const tap = require('tap')
const schools = require('../../lib/data/schools.json')

tap.equal(28, schools.length, 'There are 28 schools')
