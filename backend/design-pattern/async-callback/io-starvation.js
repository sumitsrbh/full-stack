import { readFile } from 'node:fs'

readFile('./data.txt', 'utf8', (err, data) => {
  console.log('Data:', data)
})

let scheduleNextTicks = 0
function recursiveNextTicks() {
  if (scheduleNextTicks++ > 1000) {
    return
  }
  console.log('Keeping the event loop busy')
  process.nextTick(() => recursiveNextTicks())
}
recursiveNextTicks()
