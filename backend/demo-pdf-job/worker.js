import fs from 'node:fs/promises'
import { getNextJob, getJob } from './jobs.js'

async function generatePDF(jobId) {
  console.log(`Generating PDF for ${jobId}...`)

  // Pretend PDF generation takes 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const filePath = `./${jobId}.pdf`

  await fs.writeFile(filePath, 'This is our generated PDF content')

  return filePath
}

async function processJobs() {
  while (true) {
    const jobId = getNextJob()

    if (!jobId) {
      await new Promise((resolve) => setTimeout(resolve, 500))
      continue
    }

    const job = getJob(jobId)

    job.status = 'processing'

    try {
      const filePath = await generatePDF(jobId)

      job.status = 'completed'
      job.file = filePath

      console.log(`Job ${jobId} completed`)
    } catch (error) {
      job.status = 'failed'
      job.error = error.message
    }
  }
}

processJobs()
