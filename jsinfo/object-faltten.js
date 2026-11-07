const obj = {
  user: {
    name: 'John',
    address: {
      city: 'Delhi',
      pin: 110001,
    },
  },
}

//     {
//*   "user.name": "John",
//*   "user.address.city": "Delhi",
//*   "user.address.pin": 110001
// }

function flattenObject(obj, prefix = '', result = {}) {
  for (const [key, value] of Object.entries(obj)) {
    let newKey = prefix ? `${prefix}.${key}` : key

    if (value !== null && typeof value == 'object') {
      flattenObject(value, newKey, result)
    } else {
      result[newKey] = value
    }
  }
  return result
}
console.log(flattenObject(obj))
