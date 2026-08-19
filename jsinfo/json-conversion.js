const { log } = require('console')

let user = {
  name: 'John',
  age: 30,
  toString() {
    return `{name: "${this.name}", age: ${this.age}}`
  },
}
log(user)

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
}

let json = JSON.stringify(student)
log('Stringified:', json)
