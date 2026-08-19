/* 
Create a decorator once(f) that allows the function to be called only once. Subsequent calls should return the result of the first call without executing the function body again.
*/

function once(f) {
  let count = 0
  return function wrapper(...agrs) {
    if (count <= 0) {
      count++
      return f.apply(this, agrs)
    }
  }
}
let log = once(console.log)

log('Hello') // Shows "Hello"
log('World') // Does nothing
