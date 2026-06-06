// let [firstName, surname] = 'John Smith'.split(' ')
// console.log(firstName)
// console.log(surname)

// second element is not needed
let [firstName, , title] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
]

console.log(title) // Consul
