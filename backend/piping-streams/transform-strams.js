const fs = require('node:fs')
const zlib = require('node:zlib')

const readStream = fs.createReadStream('input.txt')
const writeStream = fs.createWriteStream('output.txt.gz')

readStream.pipe(zlib.createGzip().pipe(writeStream))
