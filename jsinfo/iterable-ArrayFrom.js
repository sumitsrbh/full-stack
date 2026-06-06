let range = {
  from: 1,
  to: 6,
  [Symbol.iterator]() {
    let current = this.from
    let last = this.to

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false }
        }
        return { done: true }
      },
    }
  },
}
let arr = Array.from(range)
console.log(arr)
let arr2 = Array.from(range, (n) => n ** n)
console.log('arr2', arr2)

let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
}
let arrLike = Array.from(arrayLike)
console.log('arrLike', arrLike)

let str = '😀😆🤣'
let splitChr = str.split('')
console.log('emoji split', splitChr)

let arryFrmchar = Array.from(str)
console.log('arry from char', arryFrmchar)
console.log('See the differece btw them')
