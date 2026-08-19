let userObjects = [
  { name: 'John', age: 25 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 },
]

console.log(userObjects.map((item) => item.name))
console.log(userObjects.map((item) => ({ name: item.name })))
console.log(userObjects.filter((item) => item.name))
console.log(
  'Filter- John',
  userObjects.filter((item) => item.name == 'John')
)
console.log(
  'Map- John',
  userObjects.map((item) => item.name == 'John')
)
