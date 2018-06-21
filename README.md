[![Build Status](https://travis-ci.org/telemark/tfk-schools-info.svg?branch=master)](https://travis-ci.org/telemark/tfk-schools-info)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-schools-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-schools-info?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-schools-info

Information regarding our schools

## Installation

```bash
$ npm i tfk-schools-info
```

## Usage

Call the module with no options to list all schools.

Use an options object to specify your search.

Possible keys:

- **organizationNumber**
- **name**
- **fullName**
- **shortName**
- **officialName**
- **accessGroup**
- **phoneNumber**
- **mail**

```JavasScript

const getSchools = require('tfk-schools-info')
const options = {
  shortName: 'skivs'
}

console.log(getSchools()) //=> All schools

console.log(getSchools(options)) //=> Schools with shortName SKIVS
```

### Basic groups

To list all basic groups from a school

```JavaScript
const { getGroups } = require('tfk-schools-info')

console.log(getGroups('SKIVS'))
```
To list all groups for all schools

```JavaScript
const { getGroups } = require('tfk-schools-info')

console.log(getGroups())
```

## License

[MIT](LICENSE)

![Robohash image of tfk-schools-info](https://robots.kebabstudios.party/tfk-schools-info.png "Robohash image of tfk-schools-info")
