// Big O notation, a fundamental tool for analyzing the efficiency of algorithms
// in terms of both time complexity (how runtime scales with input size) and space complexity (how memory usage scales).

//When talking about Big O notation, we usually consider CPU (time) usage.Think of it as measuring the number of operations an algorithm performs relative to the input size.

// *Big O time complexities
// Big o notation denotes - upper bound i.e actual time could take less but not more than that.

// *O(1): constant time
// O(1) signifies that an algorithm's runtime (or sometimes space complexity) remains constant, regardless of the size of the input data.
function secondsInDays(numberOfDays) {
  if (numberOfDays <= 0 || !Number.isInteger(numberOfDays)) {
    throw new Error('Invalid number of days')
  }
  return 60 * 60 * 24 * numberOfDays
} // It will take the same amount of time to calculate the result, whether you input 1 day or 1000 days.
// O(1) algorithms typically do not involve loops that iterate over the data or recursive calls that multiply operations. They often involve direct access to data,

// *O(log(n)): logarithmic time
// grows logarathimatically with input size i.e  with each step of algo signifincantly reduces problem size.
// with increase in input size -  runtime increases by a constant time.
// guessing a number between 1 to 64.
// Let's say your first guess is 30. If it is too high, you now know the number is somewhere between 1 and 29. You have effectively halved the search space! Next, you guess 10 (too low), narrowing the range further to 11 through 29. Your third guess, 20, happens to be correct!

// *O(n):Linear time
// runtime grow proportionally and linearly with input size(n) i.e double the input, twice the runtime .
function calculateTotalExpenses(monthlyExpenses) {
  let total = 0
  for (let i = 0; i < monthlyExpenses.length; i++) {
    total += monthlyExpenses[i]
  }
  return total // The for loop iterates through each element (monthlyExpense) in the array adding it to the total variable, which is then returned with the amount of the total expenses.
}
console.log(calculateTotalExpenses([100, 200, 300])) // 600
console.log(calculateTotalExpenses([200, 300, 400, 50])) // 950
console.log(calculateTotalExpenses([30, 40, 50, 100, 50])) //270
// If the array has 12 months of expenses, the loop runs 12 times. If it has 24 months, the loop runs 24 times. The runtime increases proportionally to the number of elements in the array.

//

// *O(nˆ2): quadratic time
// as the input size doubles, the runtime roughly quadruples.
function calculateExpensesMatrix(monthlyExpenses) {
  let total = 0
  for (let i = 0; i < monthlyExpenses.length; i++) {
    for (let j = 0; j < monthlyExpenses[i].length; j++) {
      total += monthlyExpenses[i][j]
    }
  }
  return total
}
const monthlyExpenses = [
  [100, 105, 100, 115, 120, 135],
  [180, 185, 185, 185, 200, 210],
  [30, 30, 30, 30, 30, 30],
  [2000, 2000, 2000, 2000, 2000, 2000],
  [600, 620, 610, 600, 620, 600],
  [150, 100, 130, 200, 150, 100],
]
console.log('Total expenses: ', calculateExpensesMatrix(monthlyExpenses)) // 18480
// We can say the preceding function has a complexity of O(nˆ2). This is because the function contains two nested loops. The outer loop will run 6 times (n) and the inner loop will also run 6 times as we have 6 months (m). We can say the total number of operations is n * m. If n and m are similar numbers, we can say n * n, hence nˆ2.

//*O(2^n): exponential time complexity
// algoriths runtime doubles with additinal unit of input size(n). If you add just one more element to the input, the algorithm takes approximately twice as long.

// A classic example of an algorithm that is O(2ˆn) is when we have brute force that will try all possible combinations of a set of values.

// Imagine we want to know how many unique combinations we can have with ice cream toppings or no toppings at all. The available toppings are chocolate sauce, maraschino cherries and rainbow sprinkles.

// What are the possible combinations?

// Since each topping can be either present or absent, and we have three different toppings, the total number of possible combinations is: 2 * 2 * 2 = 2^3 = 8.

//* Calculating time complexity
// Basic operations such as assignments, bits and math operations, which will usually have constant time (O(1)).

//Logarithmic algorithms (O(log (n))) typically follow a divide-and-conquer strategy. They break the problem into smaller subproblems and solve them recursively.

//Loops: the number of times a loop runs directly impacts time complexity. Nested loops multiply their effects. So, if we have one loop iterating through the input of size n, it will be linear time (O(n)), two nested loops (O(nˆ2)), and so on.

// Recursions: recursive functions call themselves, potentially leading to exponential time complexity if not carefully designed. We will cover recursion in Chapter 9, Recursion.

function multiplicationTable(num, x) {
  let s = '' //* O(1) Assignement
  let numberOfAsterisks = num * x //* O(1) Assignement
  for (let i = 1; i <= numberOfAsterisks; i++) {
    s += '*'
  }
  console.log(s)
  for (let i = 1; i <= num; i++) {
    console.log(`Multiplication table for ${i} with x = ${x}`)
    for (let j = 1; j <= x; j++) {
      console.log(`${i} * ${j} = `, i * j)
    }
  }
}
