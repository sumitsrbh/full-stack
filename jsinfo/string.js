const { log } = require('console')

let str = 'As silly as a fox, as strong as an ox'
let target = 'as'

let pos = 0
while (true) {
  let foundPos = str.indexOf(target, pos)
  if (foundPos == -1) break
  log(`Found at ${foundPos}`)
  log('Value of foundPos', foundPos)
  pos = foundPos + 1
}

//* shorter form

let pos1 = -1
while ((pos1 = str.indexOf(target, pos1 + 1)) != -1) {
  log(pos1)
}
