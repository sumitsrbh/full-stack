function validateNumberArgs(func) {
  return function wrapper(...args) {
    for (let arg of args) {
      if (!Number.isFinite(arg)) {
        throw new TypeError('All arguments must be numbers')
      }
    }
    return func.apply(this, args)
  }
}

function sum(a, b) {
  return a + b
}

sum = validateNumberArgs(sum)

console.log(sum(1, 2)) // 3
console.log(sum(1, '2')) // ❌ throws error
