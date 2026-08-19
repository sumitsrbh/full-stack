const { log } = require('console')

let user = {
  name: 'John',
  years: 30,
}

let { name, years: age, isAdmin = false } = user
log(name)
log(age)
log(isAdmin)
