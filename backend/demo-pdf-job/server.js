import express from 'express'
import { getJob, getNextJob, createJobs } from './jobs.js'

const app = express()
app.use(express.json())

app.post('/posts', (req, res) => {
  const job = createJobs()

  res.status(202).json({
    jobId: job.id,
    status: job.status,
  })
})

app.get('/report/:jobId', (req, res) => {
  const job = getJob(id)

  if (!job) {
    return res.status(404).json({ message: 'Job not found' })
  }
  res.json(job)
})

app.listen(3000, () => {
  console.log('API running on port 3000')
})
