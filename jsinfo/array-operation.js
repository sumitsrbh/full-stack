const { log } = require('console')
const { getInput } = require('../js-dsa/utility/getInput')

let styles = ['Jazz', 'Blues']
styles.push('Rock-n-roll')
log(styles)
log(Math.floor(styles.length / 2))
styles[Math.floor(styles.length / 2)] = 'Classic'
log(styles)
styles.shift()
log(styles)
styles.unshift('Rap', 'Reggae')
log(styles)

let arr = ['a', 'b']
arr.push(function () {
  log(this)
})
arr[2]()

/*  
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/
// function sumInput() {
//   let numbers = []
//   while (true) {
//     getInput(['Enter a number: '], (num) => {
//       if (num === '' || num === null || !isFinite(num)) return
//       numbers.push(+value)
//     })
//   }
//   let sum = 0
//   for (let number of numbers) {
//     sum += number
//   }
//   return sum
// }
// console.log(sumInput())

// * solution
function sumInput() {
  let numbers = []

  return new Promise((resolve) => {
    const askForNumber = () => {
      getInput(['Enter a number: '], (num) => {
        if (num === '' || num === null || !isFinite(num)) {
          // Calculate sum and resolve
          let sum = 0
          for (let number of numbers) {
            sum += number
          }
          resolve(sum)
        } else {
          numbers.push(+num) // Use 'num' not 'value'
          askForNumber() // Ask for next number
        }
      })
    }

    askForNumber() // Start asking for numbers
  })
}

// Call the function
sumInput().then((sum) => {
  console.log('Sum:', sum)
})
