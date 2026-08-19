function unary(f) {
  return function wrapper(...args) {
    return f.call(this, args[0])
  }
}

const strings = ['10', '10', '10']
// const broken = strings.map(parseInt)
// console.log('Without unary:', broken)

const betterParseInt = unary(parseInt)
const fixed = strings.map(betterParseInt)

console.log('With unary:', fixed)
