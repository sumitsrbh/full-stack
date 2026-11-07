const jobs = new Map()
const queue = []

export function createJobs() {
  const id = crypto.randomUUID()

  const job = {
    id,
    status: 'queued',
    file: null,
    error: null,
  }

  jobs.set(id, job)
  queue.push(id)

  return job
}

export function getJob(id) {
  return jobs.get(id)
}

export function getNextJob(id) {
  return queue.shift()
}
