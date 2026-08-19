let user = {
  name: 'John',
  age: 30,
}

function count(obj) {
  return Object.values(obj).length
}

console.log(count(user))
