const schools = require('../../lib/data/schools.json')
const getSchools = require('../../lib/get-schools')

const yffOptions = {
  yff: true
}

describe('It returns', () => {
  test('All schools on empty', () => {
    const result = getSchools()
    expect(result.length).toBe(schools.length)
  })

  test('1 school (NOMV) when shortName is present', () => {
    const result = getSchools({ shortName: 'NOMV' })
    expect(result.length).toBe(1)
    expect(result[0].fullName).toBe('Nome videregående skole')
  })

  test('0 schools when a non existing value property is used for search', () => {
    const result = getSchools({ test: 'NOMV' })
    expect(result.length).toBe(0)
  })

  test('0 schools when a object property is used for search', () => {
    const result = getSchools({ address: { street: 'Kjørbekkdalen 11' } })
    expect(result.length).toBe(0)
  })

  test('10 schools for { yff: true }', () => {
    const result = getSchools(yffOptions)
    expect(result.length).toBe(10)
  })

  test('Melsom for { schoolNumber: "39016 }', () => {
    const result = getSchools({ schoolNumber: '39016' })
    expect(result[0].name).toBe('Melsom vgs')
  })

  test('13 schools for { county: "Vestfold" }', () => {
    const result = getSchools({ county: 'Vestfold' })
    expect(result.length).toBe(13)
  })
})
