[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# vtfk-schools-info

Information regarding our schools

## Installation

```bash
$ npm i vtfk-schools-info
```

## Usage

Call the module with no options to list all schools.

Use an options object to specify your search.

Possible keys:

- **schoolId**
- **schoolNumber** (new 2024)
- **county** (new 2024, "Telemark" or "Vestfold")
- **organizationNumber**
- **organizationNumber360**
- **name**
- **fullName**
- **shortName**
- **officialName**
- **accessGroup**
- **phoneNumber**
- **mail**
- **yff**

```JavasScript

const getSchools = require('vtfk-schools-info')
const options = {
  shortName: 'SKIV'
}

console.log(getSchools()) //=> All schools

console.log(getSchools(options)) //=> Schools with shortName SKIV
```

## License

[MIT](LICENSE)
