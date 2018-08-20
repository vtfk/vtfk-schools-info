const tap = require('tap')
const groups = require('../../lib/data/groups.json')
const getGroups = require('../../lib/get-groups')
const id = 'dalvs'

tap.equal(Object.keys(groups).length, Object.keys(getGroups()).length, 'It returns all groups on empty')

tap.equal(26, getGroups(id).length, 'It returns 26 groups for dalvs')
