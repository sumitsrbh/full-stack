import express from 'express'

const app = express()

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

app.get('/slow', (req, res) => {
  const start = Date.now()

  while (Date.now() - start < 5000) {
    Math.sqrt(Math.random())
  }

  res.json({ message: 'slow' })
})

app.listen(3000, () => {
  console.log('Server running on 3000')
})
