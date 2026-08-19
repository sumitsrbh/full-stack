function countCalls(func) {
  function wrapper() {
    wrapper.count++
    return func.call(this, ...arguments)
  }
  wrapper.count = 0
  return wrapper
}

function add(a, b) {
  return a + b
}
add = countCalls(add)

add(1, 2)
add(3, 4)

console.log(add.count) // 2
