import express from 'express'
import { monitorEventLoopDelay } from 'node:perf_hooks'

const app = express()

const eventLoop = monitorEventLoopDelay({
  resolution: 20,
})

eventLoop.enable()

setInterval(() => {
  console.log({
    eventLoopLag: `${(eventLoop.max / 1e6).toFixed(2)} ms`,
  })

  eventLoop.reset()
}, 1000)

let previousCPU = process.cpuUsage()

setInterval(() => {
  const currentCPU = process.cpuUsage(previousCPU)

  previousCPU = process.cpuUsage()

  console.log({
    userCPU: `${(currentCPU.user / 1000).toFixed(2)} ms`,
    systemCPU: `${(currentCPU.system / 1000).toFixed(2)} ms`,
  })
}, 1000)

app.use((req, res, next) => {
  const start = performance.now()

  res.on('finish', () => {
    console.log(`${req.method} ${req.url} → ${performance.now() - start}ms`)
  })

  next()
})

app.get('/fast', (req, res) => {
  res.json({ message: 'fast' })
})

function expensiveCalculation() {
  const start = Date.now()

  while (Date.now() - start < 5000) {
    Math.sqrt(Math.random())
  }
}

function slowHandler(req, res) {
  expensiveCalculation()

  res.json({
    message: 'done',
  })
}

app.get('/slow', slowHandler)

app.listen(3000, () => {
  console.log('Server running on 3000')
})
