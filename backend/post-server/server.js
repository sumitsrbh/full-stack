const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const form = fs.readFileSync(path.join(__dirname, 'public', 'form.html'))

http
  .createServer((req, res) => {
    if (req.method === 'POST') {
      post(req, res)
      return
    }
    if (req.method === 'GET') {
      get(res)
      return
    }
    error(res, code)
  })
  .listen(3001, () => {
    console.log(`Server listening on port no 3001`)
  })

function get(res) {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  })
  res.end(form)
}

function post(req, res) {
  let input = ''
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    req.on('data', (chunk) => {
      input += chunk.toString()
    })
    req.on('end', () => {
      console.log(input)
      res.end(http.STATUS_CODES[200])
    })
  } else if (req.headers['content-type'] === 'application/json') {
    req.on('data', (chunk) => {
      input += chunk.toString()
    })
    req.on('end', () => {
      console.log(input)
      console.log(JSON.parse(input))
      res.end(http.STATUS_CODES[200])
    })
  } else {
    error(res, 400)
    return
  }
}

function error(res, code) {
  res.statusCode = code
  res.end(http.STATUS_CODES[code])
}
