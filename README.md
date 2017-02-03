[![Build Status](https://travis-ci.org/telemark/tfk-schools-info.svg?branch=master)](https://travis-ci.org/telemark/tfk-schools-info)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-schools-info/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-schools-info?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tfk-schools-info
Information regarding our schools

## Installation

```sh
$ npm i tfk-schools-info
```

## Usage

Call the module with no options to list all schools.

Use an options object to specify your search.

Possible keys:

**organizationNumber**
**name**
**fullName**
**shortName**
**officialName**
**accessGroup**
**phoneNumber**
**mail**

```javascript
'use strict'

const getSchools = require('tfk-schools-info')
const options = {
  shortName: 'skivs'
}

console.log(getSchools()) //=> All schools

console.log(getSchools(options)) //=> Schools with shortName SKIVS
```
