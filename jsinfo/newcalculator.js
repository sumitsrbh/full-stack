// import { getInput } from '../js-dsa/utility/getInput'

const { log } = require('console')

// getInput(
//   [
//     'Enter operation (+, -, *, /): ',
//     'Enter first number: ',
//     'Enter second number: ',
//   ],
//   (op, val1, val2) => {
//     const result = basicOp(op, parseFloat(val1), parseFloat(val2))
//     console.log(`Result: ${result}`)
//   }
// )

function NewCalculator(a, b) {
  ;(this.a = a),
    (this.b = b),
    (this.sum = function () {
      return +this.a + +this.b
    })
  this.mul = function () {
    return this.a * this.b
  }
}

let calculator = new NewCalculator(4, 6)
log(calculator.sum())
log(calculator.mul())
