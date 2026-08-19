const { Readable } = require('node:stream')

async function* generate() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
    yield 'Node.js'
    yield 'is'
    yield 'a'
    yield 'JavaScript'
    yield 'Runtime'
}

const readable = Readable.from(generate())
readable.on('data', (chunk) => {
  console.log(chunk)
})
