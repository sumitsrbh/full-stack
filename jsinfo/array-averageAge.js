function getAverageAge(users) {
  return users.reduce((total, current) => total + current.age, 0) / users.length
  //   let sum = 0
  //   users.forEach((element) => {
  //     sum += element.age
  //   })
  //   return sum / users.length
}
let users = [
  { name: 'John', age: 25 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 29 },
]

console.log(getAverageAge(users))
