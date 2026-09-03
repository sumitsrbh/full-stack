import http from 'node:http'
import router from './router.js'

const server = http.createServer((req, res) => {
  router.handle(req, res)
})

router.get('/', (req, res) => {
  res.writeHead(200, {
    'content-type': 'application/json',
  })
  res.end(JSON.stringify({ message: 'Task Board API' }))
})

router.get('/tasks', (req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({ tasks: [] }))
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
