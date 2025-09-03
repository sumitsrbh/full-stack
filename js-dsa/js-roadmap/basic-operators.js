/*  
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/
const { log } = require('console')
const { getInput } = require('../utility/getInput')

const basicOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

const basicOp = (op, x, y) => basicOperations[op](x, y)
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine'
log(myStr)
getInput(
  [
    'Enter operation (+, -, *, /): ',
    'Enter first number: ',
    'Enter second number: ',
  ],
  (op, val1, val2) => {
    const result = basicOp(op, parseFloat(val1), parseFloat(val2))
    console.log(`Result: ${result}`)
  }
)
