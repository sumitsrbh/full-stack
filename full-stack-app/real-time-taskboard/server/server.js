import http from 'node:http'
// import router from './router.js'
import router from './router-cls.js'

const server = http.createServer((req, res) => {
  router.matchRoute(req, res)
})

router.get('/', (req, res) => {
  res.writeHead(200, {
    'content-type': 'application/json',
  })
  res.end(JSON.stringify({ message: 'Task Board API' }))
})

router.get('/tasks', (req, res) => {
  res.end('all tasks')
})

router.get('/tasks/:id', (req, res) => {
  res.end(`task ${req.params.id}`)
})

router.get('/tasks/new', (req, res) => {
  res.end('new tasks')
})

router.get('/users/:userId/tasks/:taskId', (req, res) => {
  res.end(JSON.stringify(req.params))
})
server.listen(3000, () => {
  console.log('Server listening on port 3000')
})


