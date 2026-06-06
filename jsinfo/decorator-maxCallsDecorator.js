/*
Max Calls Decorator
Create maxCalls(func, n) that:
Allows only n executions.
After that, it throws an error.
Must preserve context and arguments.
*/

function maxCalls(func, a) {
  let count = 0
  return function wrapper(...args) {
    if (count >= a) {
      throw new Error('max call reached')
    }
    let result = func.call(this, ...args)
    count++
    return result
  }
}

function greet(name) {
  return 'Hello ' + name
}

greet = maxCalls(greet, 2)

console.log(greet('John')) // works
console.log(greet('Pete')) // works
console.log(greet('Anna')) // ❌ throws error
