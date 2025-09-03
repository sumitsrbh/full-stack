const { log } = require('node:console')
const { getInput } = require('../js-dsa/utility/getInput')
let user = {
  name: 'John',
  age: 30,
}
user.address = 'NYC'
log('After adding address to user', user)

getInput(['Enter a key (name or age or property name to add): '], (key) => {
  if (key in user) {
    console.log('Value is: ', user[key]) // *computed propeties
  } else {
    getInput([`Enter value of property "${key}":`], (value) => {
      user[key] = value
      console.log(`Value of ${key}:`, user[key])
      log('Updatead Obj', user)
    })
  }
})
