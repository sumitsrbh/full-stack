function filterRange(arr, a, b) {
  let newArr = []
  arr.map((item) => {
    if (item >= a && item <= b) newArr.push(item)
  })
  return newArr
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)
console.log(filtered)
console.log(arr)

function filterRangeOptimised(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b)
}
