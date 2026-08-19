const fs = require('node:fs')

const rs = fs.createReadStream('./file.txt')

async function run() {
  for await (let chunk of rs) {
    console.log('Infinte data:', chunk.toString())
  }
 
}

run()
