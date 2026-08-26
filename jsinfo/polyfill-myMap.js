// Create your own map method.
let arry = [10, 20, 30]

Array.prototype.myMap = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}

const result = arry.myMap((value, index, arry) => {
  return value * 2
})
console.log(result)
