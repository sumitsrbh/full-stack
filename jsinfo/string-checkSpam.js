const { log } = require('console')

function checkSpam(str) {
  let strLoweCase = str.toLowerCase()
  return strLoweCase.includes('viagra') || strLoweCase.includes('xxx')
}

log(checkSpam('buy ViAgRA now'))
log(checkSpam('free xxxxx'))
log(checkSpam('innocent rabbit'))
