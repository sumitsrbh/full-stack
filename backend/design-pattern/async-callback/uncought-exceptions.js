import { readFile } from 'node:fs'
function readJsonThrows(filename, callback) {
  readFile(filename, 'utf8', (err, data) => {
    let parsed
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}

readJsonThrows('invaliad_json.json', (err) => console.error(err))
