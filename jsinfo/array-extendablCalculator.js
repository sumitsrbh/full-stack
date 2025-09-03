function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  }
  this.calculate = function (str) {
    let split = str.split(' ')
    a = +split[0]
    op = split[1]
    b = +split[2]
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }
    return this.methods[op](a, b)
  }
  this.addMethod = function (name, func) {
    this.methods[name] = func
  }
}
let powerCalc = new Calculator()
console.log(powerCalc.calculate('3 + 7'))
console.log(powerCalc.calculate('3 - 7'))
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

console.log(powerCalc.calculate('2 ** 3'))
console.log(powerCalc.calculate('2 * 3'))
