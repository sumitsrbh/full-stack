const { log } = require('console')

function getMaxSubSum(arr) {
  let cMax = arr[0]
  let gMax = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) {
      cMax = Math.max(arr[i + 1], cMax + arr[i + 1])
      log('cMax value: ', cMax, '\tgMax', gMax)
      if (cMax > gMax) gMax = cMax
    }
  }
  return gMax
}
log(getMaxSubSum([-1, 2, 3, -9]) == 5)
log(getMaxSubSum([2, -1, 2, 3, -9]) == 6)
log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11)
log(getMaxSubSum([-2, -1, 1, 2]) == 3)
log(getMaxSubSum([100, -9, 2, -3, 5]) == 100)
log(getMaxSubSum([1, 2, 3]) == 6)
