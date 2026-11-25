// import { findMid } from './binary-search-tree-findItem.js'

const target = 4
const arr = [2, 4, 4, 4, 6, 8, 10]
let arr1 = [4, 4, 4] // 0
let arr2 = [2, 4, 4, 4] // 1
let arr3 = [2, 3, 5] // -1

function findMid(left, right) {
  const mid = Math.floor((left + right) / 2)
  return mid
}

function findFirstOccurance(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = findMid(left, right)
    console.log('mid:', mid, 'left:', left, 'right:', right)
    if (arr[mid] === target) {
      right = mid
      if (left == right) return left
    }
    if (arr[mid] < target) {
      left = mid + 1
    }
    if (arr[mid] > target) {
      right = mid - 1
    }
  }
  return -1
}

console.log(findFirstOccurance(arr, target))
console.log(findFirstOccurance(arr1, target))
console.log(findFirstOccurance(arr2, target))
console.log(findFirstOccurance(arr3, target))
