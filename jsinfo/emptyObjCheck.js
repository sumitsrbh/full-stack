let obj = {}
let obj2 = {
  name: 'John',
  age: 20,
  city: 'New York',
}

function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

console.log(isEmpty(obj))
console.log(isEmpty(obj2))
