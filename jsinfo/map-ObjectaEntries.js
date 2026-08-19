let obj = {
  name: 'John',
  age: 20,
}
// creating a map of from plain object, Object.entries return an array of key value pair
let objMap = new Map(Object.entries(obj))
console.log('objMap', objMap, '\nBy key', objMap.get('name'))

objMap.forEach((item, index) => {
  console.log(`Item ${item} indexes ${index}`)
})

let map = new Map()
map.set('banana', 1)
map.set('orange', 2)
map.set('meat', 4)

console.log('entries', map.entries())
let keys = map.keys()
console.log('keys', keys)
for (let element of keys) {
  console.log('each keys ', element)
}
let object = Object.fromEntries(map.entries())
console.log('Ojbect fromEntries', object)

console.log(object.orange)
console.log(map.keys())

let mapObj = new Map([
  { name: 'John' },
  { surname: 'smith' },
  { address: 'NYC' },
])

console.log('Object ', mapObj.entries())
