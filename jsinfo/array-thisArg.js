let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge
  },
}

let users = [
  { name: 'Bilbo', age: 16 },
  { name: 'Nazgul', age: 24 },
  { name: 'Gandalf', age: 20 },
  { name: 'Poppin', age: 30 },
]

let soldiers = users.filter(army.canJoin, army)

console.log(soldiers.length)
console.log(Array.isArray(soldiers))
for (let names of soldiers) {
  console.log(names.name)
}
