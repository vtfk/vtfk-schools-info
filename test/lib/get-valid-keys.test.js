const getValidKeys = require('../../lib/get-valid-keys')
const supportedKeys = require('../../lib/data/supported-keys.json')

describe('Return 1 valid key when', () => {
  supportedKeys.forEach(supportedKey => {
    test(`'${supportedKey}' is passed`, () => {
      const options = {}
      options[supportedKey] = 'test'
      const keys = getValidKeys(options)

      expect(keys.length).toBe(1)
      expect(keys[0]).toBe(supportedKey)
    })
  })
})

describe('Return 0 keys when', () => {
  test('No keys are passed', () => {
    const keys = getValidKeys({})

    expect(keys.length).toBe(0)
  })

  test('An invalid key is passed', () => {
    const keys = getValidKeys({ invalid: 'test' })

    expect(keys.length).toBe(0)
  })
})
