//* sync version
let range = {
  from: 1,
  to: 5,
  getValue(from, to) {
    this.from = from
    this.to = to
  },
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  },
}
console.log('---Value of range--')
// range.getValue(20, 25)
for (let value of range) {
  console.log(value)
}

// * genrator version

console.log('---generator version--')

let rangeGenVer = {
  from: 16,
  to: 20,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value
    }
  },
}

console.log([...rangeGenVer])
for (let value of rangeGenVer) {
  console.log(value)
}
// Async version

console.log('=========Async version value==========')
let rangeAsynVer = {
  from: 100,
  to: 110,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  },
}
;(async () => {
  for await (let value of rangeAsynVer) {
    console.log(value)
  }
})()

//* Aysn generators

console.log('=========Async version with generotors==========')

async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    yield i
  }
}
;async () => {
  let generator = generateSequence(11, 16)
  for await (let value of generator) {
    console.log(value)
  }
}
