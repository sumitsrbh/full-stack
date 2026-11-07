const arr = [1, 2, 3, 4, 5, 6]
const target = 3

function findTargetSum(arr, target) {
  let i = 0
  let j = arr.length - 1
  let sum = 0
  while (i < j) {
    const left = arr[i]
    const right = arr[j]
    sum = left + right
    if (sum === target) return [left, right]
    if (sum < target) {
      i++
    } else {
      j--
    }
  }
  return null
}
console.log(findTargetSum(arr, target))
