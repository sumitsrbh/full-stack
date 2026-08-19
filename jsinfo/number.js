const { log, info } = require('node:console')
const { getInput } = require('../js-dsa/utility/getInput')

let num = 255

log(num.toString(16))
log(String(num))

log('Large number', 1e300)
log('Large number', 1e400)
log('Large number', 1e500)

log('0.1 + 0.2 == 0.3 //', 0.1 + 0.2 == 0.3)
log('0.1 + 0.2 == 0.3 //', +(0.1 + 0.2).toFixed(2) == 0.3)

// *Check a valid number
log('NaN === NaN :', NaN === NaN)
log('0===-0 :', 0 === -0)
log('Object.is(NaN,NaN)', Object.is(NaN, NaN))
log('Object.is(0,-0)', Object.is(0, -0))

log("isFinite('str'): ", isFinite('str'))
log("isFinite(''): ", isFinite(''))
log("isFinite(' '): ", isFinite(' '))

// * More strict
log("Number.isFinite('')", Number.isFinite(''))
log("Number.isFinite(' ')", Number.isFinite(' '))

log("Object.is(2, '2')", Object.is(2, '2'))
// conversion
log("'100px'", +'100px')
log('Number("100px")', Number('100px'))

log('**1.35.toFixed(1)', (1.35).toFixed(1))
log('**6.35.toFixed(1)', (6.35).toFixed(1))

getInput(['Enter a number :'], (num) => {
  log(
    `num:${num}`,
    typeof num,
    ';',
    'type conversion; ',
    isFinite(num)
      ? `${num}: Valid number`
      : `${num}: NaN / +Infinity / -Infinity`
  )
  log(
    `Strict check typeOf(${num}):${typeof num}  `,
    Number.isFinite(num)
      ? `${num}: Valid number`
      : `${num}: NaN / +Infinity / -Infinity`
  )
})

// function readNumber() {
const input = null
do {
  getInput(['Enter a number'], (input) => {
    return input
  })
} while (!isFinite(input))
// }
// log('Entered value=>', readNumber())
