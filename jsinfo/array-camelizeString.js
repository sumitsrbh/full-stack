function camelize(str) {
  let strArry = str.split('-')
  let camelCased = strArry[0]
  if (str) {
    for (let i = 1; i < strArry.length; i++) {
      camelCased += strArry[i][0].toUpperCase() + strArry[i].slice(1)
    }
  }
  return camelCased
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('-webkit-transition'))
console.log('for empyt: ', camelize(''))

function camelizeOptimised(str) {
  return str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}

console.log(camelizeOptimised('background-color'))
console.log(camelizeOptimised('list-style-image'))
console.log(camelizeOptimised('-webkit-transition'))
console.log('for empyt: ', camelizeOptimised(''))
