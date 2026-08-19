let arryUsers = [
  { name: 'John', surname: 'Smith', id: 1 },
  { name: 'Pete', surname: 'Hunt', id: 2 },
  { name: 'Mary', surname: 'Key', id: 3 },
]

let usersMapped = arryUsers.map((user) => ({
  fullName: user.name + ' ' + user.surname,
  id: user.id,
}))

console.log(usersMapped)
