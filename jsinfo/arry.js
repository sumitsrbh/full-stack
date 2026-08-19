// misusing array

const { log } = require('console')

let arry = []
arry.test = 6
log('array values', arry)

let arr = [1, 2, 3, 4, 5]
arr.length = 6
log(arr[6])

arr.length = 2
log(arr[2])

log('[] + 1: ', [] + 1)
log('[1] + 1: ', [1] + 1)
log('[1,2] + 1: ', [1, 2] + 1)
