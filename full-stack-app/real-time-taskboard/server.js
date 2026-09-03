import http from 'node:http'

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      if (req.method === 'GET') {
        setHeader(200, res)
        res.end()
      } else {
        error(404, res)
      }
      break
    case '/tasks':
      switch (req.method) {
        case 'GET':
          setHeader(200, res)
          res.end(JSON.stringify({ tasks: [] }))
          break

        default:
          error(404, res)
          break
      }
      break
    default:
      error(404, res)
      break
  }
})
function error(code, res) {
  res.statusCode = code
  res.end('Not found')
}
function setHeader(status, res) {
  res.writeHead(status, { 'content-type': 'application/json' })
}

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
