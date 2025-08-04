//  *Determine time and space complexity

const oddOrEven = (array) => (array.length % 2 === 0 ? 'even' : 'odd') // * O(1)

function calculateAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    //* O(n)
    sum += array[i]
  }
  return sum / array.length
}

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
