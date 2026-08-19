const fs = require('node:fs')
const { Transform } = require('node:stream')

// const rs = fs.createReadStream('./file.txt')
// const newFile = fs.createWriteStream('./newFile.txt')

// const upperCase = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase())
//   },
// })

// rs.pipe(upperCase).pipe(newFile)

// * experimental array-like methods for readable stream
const rsExp = fs.createReadStream('./newFile.txt')
const newFileExp = fs.createWriteStream('./newFileExp.txt')

rsExp.map((chunk) => chunk.toString().toLowerCase()).pipe(newFileExp)
