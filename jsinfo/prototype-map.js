Array.prototype.myMap = function (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}

let numbers = [12, 3, 67, 56]

const doubled = numbers.myMap((num) => {
  return num * 2
})

console.log(doubled)
