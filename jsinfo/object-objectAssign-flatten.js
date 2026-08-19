const { log } = require('console')

let user = {
  name: 'smith',
  size: { height: 169, weight: 56 },
}

for (let item in user) {
  if (typeof user[item] === 'object' && !Array.isArray(user[item])) {
    for (let innerItem in user[item]) {
      console.log(`${item}.${innerItem}:${user[item][innerItem]}`)
    }
  } else {
    console.log(`${item}:${user[item]}`)
  }
}

//* above code will fail for further second level nesting
let user2 = {
  name: 'smith',
  size: {
    height: 169,
    weight: 56,
    dimensions: { unit: 'cm' }, // second level nesting
  },
}

function flatten(obj, parentKey = '') {
  let result = {}

  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key

    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      Object.assign(result, flatten(obj[key], newKey))
    } else {
      result[newKey] = obj[key]
    }
  }

  return result
}

console.log(flatten(user))
console.log(flatten(user2))
