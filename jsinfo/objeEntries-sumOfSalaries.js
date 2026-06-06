let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

function sumOfSalaries(salaries) {
  return Object.values(salaries).reduce((sum, current) => sum + current)
}

function sumOfSalaries2(salaries) {
  let sum = 0
  for (let salary of Object.values(salaries)) {
    sum += salary
  }
  return sum
}
console.log(sumOfSalaries(salaries))
console.log(sumOfSalaries2(salaries))
