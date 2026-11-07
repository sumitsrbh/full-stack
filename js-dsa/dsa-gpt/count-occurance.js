function firstNonRepeating(arr) {
  const frequency = new Map()

  // Pass 1: Count occurrences
  for (const num of arr) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1)
  }

  // Pass 2: Find the first element with frequency 1
  for (const num of arr) {
    if (frequency.get(num) === 1) {
      return num
    }
  }

  return null
}

console.log(firstNonRepeating([4, 5, 1, 2, 1, 4, 5])) // null
