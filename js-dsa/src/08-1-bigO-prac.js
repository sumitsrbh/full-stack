//  *Determine time and space complexity

const oddOrEven = (array) => (array.length % 2 === 0 ? 'even' : 'odd') // * O(1)
let t1_oddOrEven = performance.now()
const arry = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 100000)
)
// oddOrEven(arry)
let t2_oddOrEven = performance.now()
console.log(`Time Elapsed: ${(t2_oddOrEven - t1_oddOrEven) / 1000} seconds `)

function calculateAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    //* O(n)
    sum += array[i]
  }
  return sum / array.length
}
const t1_calculateAvg = performance.now()
calculateAverage(arry)
const t2_calculateAvg = performance.now()

function hasCommonElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    // *O(n)
    for (let j = 0; j < array2.length; j++) {
      // * O(n*n)
      if (array1[i] === array2[j]) {
        return true
      }
    }
  }
  return false
}

function getOddNumbers(array) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    // *O(n)
    if (array[i] % 2 !== 0) {
      result.push(array[i])
    }
  }
  return result
}
