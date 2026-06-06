let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
]

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value
    return obj
  }, {})
}
console.log(groupById(users))

function groupByIdMap(array) {
  //   let obj = {}
  return array.map((user) => (obj[user.id] = { user }))
  //   return obj
}
console.log('using map', groupByIdMap(users))
