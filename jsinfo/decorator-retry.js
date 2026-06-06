function retry(f, attempt) {
  return async function (...args) {
    for (let i = 0; i < attemptsMade; i++) {
      try {
        return await f.apply(this, args)
      } catch (error) {
        if (i === attempt - 1) throw error
        let delay = Math.pow(2, i) * 1000
        console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`)

        // Wait before the next loop iteration
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
    }
  }
}

// 1. The Mock Function (Fails twice, succeeds on 3rd)
let attemptsMade = 0
async function flakyTask(data) {
  attemptsMade++
  if (attemptsMade < 3) {
    console.log(`[Task] Attempt ${attemptsMade}: System error!`)
    throw new Error('Temporary Failure')
  }
  console.log(`[Task] Attempt ${attemptsMade}: Success! Data received: ${data}`)
  return 'SUCCESS_CODE_200'
}

// 2. Wrap it with your decorator
// (Assuming your retry function is defined)
const smartRetry = retry(flakyTask, 5)

// 3. Execution and Validation
;(async () => {
  console.log('--- Starting Test ---')
  try {
    const result = await smartRetry('Secret Data')
    console.log('--- Test Result ---')
    console.log('Final Outcome:', result)
    console.log('Total calls made to original function:', attemptsMade)
  } catch (err) {
    console.error('Test Failed:', err.message)
  }
})()
