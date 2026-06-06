async function withTimeout(fn, ms) {
  return function (...args) {
    if()
  }
}

async function slowTask() {
  await new Promise((r) => setTimeout(r, 2000))
  return 'done'
}

slowTask = withTimeout(slowTask, 1000)

slowTask().then(console.log).catch(console.error) // Error: Timeout error
