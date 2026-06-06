const { log } = require('console')

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}
log(Object.entries(salaries))
function topSalary(salaries) {
  let highest = 0
  let highEarner = ''
  for (let [name, salary] of Object.entries(salaries)) {
    log(salary, name)
    if (salary > highest) {
      highest = salary
      highEarner = name
    }
  }
  return highEarner
}
log(topSalary(salaries))
