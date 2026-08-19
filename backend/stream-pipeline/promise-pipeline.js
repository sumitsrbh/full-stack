const fs = require('node:fs')
const { Transform } = require('node:stream')
const { pipeline } = require('node:stream/promises')

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase())
  },
})

async function run() {
  await pipeline(
    fs.createReadStream('./file.txt'),
    uppercase,
    fs.createWriteStream('./newFileAsync.txt'),
  )
  console.log('Pipeline succeeded')
}

run().catch((err) => {
  console.error('Pipeline failed', err)
})
