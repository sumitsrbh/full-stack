// import { createInterface } from 'readline' *//using ES6 import syntax in a Node.js environment that's running in CommonJS mode
// read  CommannJs vs ES6 markdown file
const { createInterface } = require('readline')

function getInput(prompts, callback) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  let answers = []
  let i = 0

  const ask = () => {
    if (i < prompts.length) {
      rl.question(prompts[i], (answer) => {
        answers.push(answer)
        i++
        ask()
      })
    } else {
      rl.close()
      callback(...answers)
    }
  }

  ask()
}

module.exports = { getInput }
