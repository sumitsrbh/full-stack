function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = findMid(left, right)
    // console.log('mid', mid, 'left:', left, 'right:', right)
    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}
export function findMid(left, right) {
  const mid = Math.floor((left + right) / 2)
  return mid
}

const productIds = [4, 9, 13, 18,23, 27, 31, 36, 42, 48, 53]
const productIds1 = [4, 9, 13, 18, 23, 27, 31, 36, 42, 48, 53, 59, 64, 71, 78]

console.log(binarySearch(productIds, 53)) // 10
console.log(binarySearch(productIds, 50)) // -1
