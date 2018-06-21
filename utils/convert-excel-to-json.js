const convertExcel = require('excel-as-json').processFile
const inFile = 'utils/data/basisgrupper.xlsx'
const outFile = 'utils/data/basisgrupper.json'
convertExcel(inFile, outFile, false, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
