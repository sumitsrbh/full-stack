const arr = [2, 3, 1, 2, 4, 3]
const target = 7

function minSubArrayLen(arr, target) {
  // Your implementation
  let windowSum = 0
  let minLenght = Infinity
  let left = 0
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]

    while (windowSum >= target) {
      minLenght = Math.min(minLenght, right - left + 1)
      windowSum -= arr[left]
      left++
    }
  }
  return minLenght
}

console.log(minSubArrayLen(arr, target))
