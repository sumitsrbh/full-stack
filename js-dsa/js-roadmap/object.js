const { log } = require('console')

let user = {
  name: 'John',
  age: 30,
}

// method
user.sayHi = function () {
  log('Hello')
}

// user.sayHi()

let user1 = {
  name: 'John',
  age: 30,
  sayHi1() {
    log(user1.name)
  },
  sayHi2() {
    log('Object with this =>', this.name)
  },
}

user1.sayHi1()
user1.sayHi2()

// * problem without this
let admin = user1
user1 = null // overwrite to make things obvious

log(' \nAfter copying ')
admin.sayHi2()
admin.sayHi1()
