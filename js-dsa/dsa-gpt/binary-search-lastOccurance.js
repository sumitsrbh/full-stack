const arr = [2, 4, 4, 4, 6, 8, 10]
const target = 4
const arr1 = [1, 2, 2, 2, 2, 3]
const target1 = 2
const arr2 = [1, 3, 3]
const target2 = 3

function findMid(left, right) {
  const mid = Math.floor((left + right) / 2)
  return mid
}

function findLastOccurrence(arr, target) {
  let left = 0
  let right = arr.length - 1
  let lastIndex = -1
  while (left <= right) {
    const mid = findMid(left, right)
    // console.log('left:', left, 'right:', right, 'mid:', mid)
    if (arr[mid] === target) {
      left = mid + 1
      lastIndex = mid
    }
    if (arr[mid] < target) left = mid + 1
    if (arr[mid] > target) right = mid - 1
  }
  return lastIndex
}

console.log(findLastOccurrence(arr1, target1)) // 3
console.log(findLastOccurrence(arr, target)) // 4
console.log(findLastOccurrence(arr, 5)) // -1
console.log(findLastOccurrence(arr2, target2)) // 2
