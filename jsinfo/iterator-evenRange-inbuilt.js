let oddRange = {
  from: 0,
  to: 40,
  [Symbol.iterator]() {
    let current = this.from % 2 === 0 ? this.from + 1 : this.from
    let last = this.to

    return {
      next() {
        if (current <= last) {
          let value = current
          current += 2
          return {
            value,
            done: false,
          }
        } else {
          return { done: true }
        }
      },
    }
  },
}

for (let num of oddRange) {
  console.log(num)
}
