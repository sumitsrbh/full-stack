// import { readFile } from 'node:fs'

// const cache = new Map()

// function inconsistentRead(filename, cb) {
//   if (cache.has(filename)) {
//     console.log('Reading cache....', cache.get(filename))
//     //  cb(cache.get(filename)) The bug
//     process.nextTick(() => cb(cache.get(filename))) //* solution for the bug.
//   } else {
//     readFile(filename, 'utf8', (_err, data) => {
//       cache.set(filename, data)
//       cb(data)
//     })
//   }
// }

// function createFileReader(filename) {
//   const listeners = []
//   inconsistentRead(filename, (value) => {
//     for (const listener of listeners) {
//       listener(value)
//     }
//   })
//   return { onDataReady: (listener) => listeners.push(listener) }
// }

// const reader1 = createFileReader('data.txt')
// reader1.onDataReady((data) => {
//   console.log(`First call data: ${data}`)
//   // ...sometime later we try to read again from
//   // the same file
//   const reader2 = createFileReader('data.txt')
//   reader2.onDataReady((data) => {
//     console.log(`Second call data: ${data}`)
//   })
// })

import { readFile } from 'node:fs'
function readJson(filename, callback) {
  readFile(filename, 'utf8', (err, data) => {
    let parsed
    if (err) {
      // error reading the file
      // propagate the error and exit the current function
      return callback(err)
    }
    try {
      // parse the file contents
      parsed = JSON.parse(data)
    } catch (err) {
      // catch parsing errors
      return callback(err)
    }
    // no errors, propagate just the data
    callback(null, parsed)
  })
}
