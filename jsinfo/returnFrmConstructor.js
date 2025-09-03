function BigUser() {
  this.name = 'John'
  return { name: 'Godzilla' }
}

console.log('Return with object-', new BigUser().name)

function SmallUser() {
  this.name = 'John'
  let temp = 90
  return temp
}

console.log('Return with primitives-', new SmallUser().name)
