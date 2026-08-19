const fs = require('node:fs')

const file = fs.createWriteStream('./file.txt', { flags: 'a' })

for (let i = 0; i <= 100000; i++) {
  try {
    file.write(
      "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine.\n",
    )
  } catch (error) {
    process.stderr.write(error)
  }
}
