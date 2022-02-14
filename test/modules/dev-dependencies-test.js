const pkg = require('../../package.json')
const dependencies = pkg.devDependencies || {}
const dropModules = ['nsp']
const isDropped = (module) => !dropModules.includes(module)

if (Object.keys(dependencies).length > 0) {
  Object.keys(dependencies).filter(isDropped).forEach((dependency) => {
    test(`'${dependency}' loads ok`, () => {
      expect(require(dependency)).toBeTruthy()
    })
  })
}
