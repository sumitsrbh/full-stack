let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
])

// iterate over keys
for (let vegetable of recipeMap.keys()) {
  console.log('keys', vegetable)
}
for (let vegetable of recipeMap.values()) {
  console.log('values', vegetable)
}

for (let entries of recipeMap) {
  console.log(entries)
}

// order is preserved unlinke the object

recipeMap.forEach((value, key, map) => {
  console.log(`${value}  ${key} ${map}`)
})
