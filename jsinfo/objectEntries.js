let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
}
let objectKeyPair = Object.entries(prices)
console.log(objectKeyPair)
let doublePrices = objectKeyPair.map((item) => [item[0], item[1] * 2])
console.log(doublePrices)

let doublePriceObj = Object.fromEntries(doublePrices)
console.log(doublePriceObj)

for (let key in prices) {
  prices[key] *= 2
}
console.log(prices)
