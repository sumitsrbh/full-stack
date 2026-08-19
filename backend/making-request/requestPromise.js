const { rejects } = require('node:assert')
const http = require('node:http')

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = ''
        res.on('data', (chunk) => {
          data += chunk
          console.log('data  chunk', data)
        })
        res.on('end', () => {
          resolve(data)
        })
      })
      .on('erro', (err) => {
        reject(err)
      })
  })
}

const run = async () => {
  const res = await httpGet('http://example.com')
  console.log(res)
}

run()
