const schools = require('../../lib/data/schools.json')

test('There are 24 schools', () => {
  expect(schools.length).toBe(24)
})
