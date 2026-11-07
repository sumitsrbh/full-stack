const interval = setInterval(async () => {
  const response = await fetch(`/reports/${jobId}`)

  const job = await response.json()

  if (job.status === 'completed') {
    clearInterval(interval)

    console.log('PDF ready!')
  }
}, 2000)
