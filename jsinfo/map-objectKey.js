let john = { name: 'John' }
let ben = { name: 'Ben' }
let visitCountMap = new Map()

visitCountMap.set(john, 123)
console.log(visitCountMap.get(john))

let visitCountObj = {}

visitCountObj[ben] = 234
visitCountObj[john] = 123

console.log(visitCountObj['[object Object]'])
