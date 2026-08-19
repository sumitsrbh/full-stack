const { log } = require('console')

function extractCurrencyValue(str) {
  return parseInt(str.slice(1))
}

log(extractCurrencyValue('$120'))
