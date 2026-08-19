let obj = {}

console.log(obj.toString())
console.log(obj.valueOf())

let id = Symbol.for('id')
console.log('Symbol', id)

let id1 = Symbol('id')
console.log('id1 =>', typeof id1)
console.log('id1 =>', typeof id1.toString())
