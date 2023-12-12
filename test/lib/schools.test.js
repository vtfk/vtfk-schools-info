const schools = require('../../lib/data/schools.json')

test('There are 26 schools', () => {
  expect(schools.length).toBe(26)
})
