const { getInput } = require('../js-dsa/utility/getInput')
function ucFirst(str) {
  if (!str) return ''
  return str[0].toUpperCase() + str.slice(1)
}

getInput(['Enter a string to capitalise: '], (input) => {
  console.log(ucFirst(input))
})
