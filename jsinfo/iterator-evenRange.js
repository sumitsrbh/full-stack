function EvenRange(from, to) {
  ;((this.from = from), (this.to = to))
}

let evenRAnge = new EvenRange(0, 20)

// dynamically add the method
evenRAnge[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: (this.current += 2) }
      } else {
        return { done: true }
      }
    },
  }
}

for (let num of evenRAnge) {
  console.log(num)
}
