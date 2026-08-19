const fs = require('node:fs')
const { pipeline, Transform } = require('node:stream')

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  },
})

pipeline(
  fs.createReadStream('./file.txt'),
  upperCase,
  fs.createWriteStream('./newFile'),
  (err) => {
    if (err) {
      console.error('Pipleline failed.', err)
    } else {
      console.log('Pipeline succeeded.')
    }
  },
)
