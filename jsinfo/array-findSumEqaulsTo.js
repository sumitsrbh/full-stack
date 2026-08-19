const { log } = require('console')

let nums = [1, 3, 4, 7, 10]
let target = 14

// let nums = nums.sort((a, b) => b - a)

let map = new Map()
for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == 14) {
      map.set(14, [nums[i], nums[j]])
    }
  }
}
log(map.get(14))

// best solution

let map1 = new Map()
let seen = new Set()
let pairs = new Set() // use Set of strings to avoid duplicate pairs

for (let num of nums) {
  let complement = target - num

  if (seen.has(complement)) {
    // sort the pair so [4,10] and [10,4] are treated the same
    let pair = [num, complement].sort((a, b) => a - b)
    pairs.add(pair.toString())
  }

  seen.add(num)
}

// Convert string pairs back into arrays
let result = Array.from(pairs).map1((p) => p.split(',').map1(Number))

map1.set(target, result)

console.log(map1.get(target))
// Example output: [ [4, 10], [7, 7] ]
