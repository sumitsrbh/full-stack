/* 
*Find the maximum sum of any contiguous subarray of size k.

Instead of summing all three elements every time, update the previous sum:
\[
\text{newSum}=\text{previousSum}-\text{outgoing}+\text{incoming}
\]

This gives O(n) time and O(1) auxiliary space.
*/


const arr = [2, 1, 5, 1, 3, 2, 9]
const k = 3

function maxSubarraySum(arr, k) {
  let firstWindow = 0
  for (let i = 0; i < k; i++) {
    firstWindow = firstWindow + arr[i]
  }
  let i = k
  let windowSum = firstWindow
  let maxSubArray = firstWindow
  while (i < arr.length) {
    let outgoing = i - k
    windowSum = windowSum - arr[outgoing] + arr[i]
    if (windowSum > maxSubArray) {
      maxSubArray = windowSum
    }
    i++
  }
  return maxSubArray
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3))
// Expected: 9
