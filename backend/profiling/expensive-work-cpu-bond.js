function expensiveWork() {
  const start = Date.now()

  while (Date.now() - start < 5000) {
    Math.sqrt(Math.random)
  }
}
console.log('Starting')
expensiveWork()
console.log('finished')
