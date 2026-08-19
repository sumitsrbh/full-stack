const fs = require('node:fs')

const rs = fs.createReadStream('./file.txt')

rs.on('readable', () => {
  let data = rs.read()
  while (data !== null) {
    console.log(data.toString())
    data = rs.read()
  }
})

rs.on('end', () => {
  console.log('No data left to consume')
})
