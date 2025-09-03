const { log } = require('console')

let user = {
  name: 'John',
  age: 30,
  city: 'New York',
}

let clone = {}
for (let key in user) {
  log('key in user', key)
  clone[key] = user[key]
}
log('clone after copying user', clone)

clone.name = 'Peter'

//* Object.assign can also be used to copy object

// adding properties
user.address = 'NYC'

// adding properties
user.work = 'Microsoft'
user['street'] = 'Lane 04'
// mutate properties
user.age = 55
try {
  user[landmark] = 'Empire state building'
} catch (error) {
  log("Error adding prop = 'Landmark' ", error)
}

log('clone=', clone, '\n', 'user=', user)

// * Object assign -
// # Object.assign(dest, ...sources)
let user1 = { name: 'Jack' }

let permission1 = { canView: true }
let permission2 = { canEdit: true }

Object.assign(user1, permission1, permission2)

log('After object assign', user1)

// cloning
let user2 = { name: 'Smith' }

let clone2 = Object.assign(
  {},
  user2,
  { address: 'NYC', age: 45 },
  { work: 'Microsoft' }
)
log('clone2 ', clone2)

// Copying nested object
let user3 = {
  name: 'Juno',
  sizes: {
    weight: 178,
    height: 78,
  },
}

let clone3 = {}
clone3.sizes = user3.sizes
log('clone3', clone3)

user3.sizes.height = 0

log('After mutating user3, value of clone3', clone3)
