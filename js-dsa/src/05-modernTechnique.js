
const circleAreaFn = function(radius) { 
  const PI = 3.14; 
  const area = PI * radius * radius; 
  return area; 
};
console.log(circleAreaFn(2)); // 12.56

// Arrow function 
const circleArea = (radius) => {
  const PI = 3.14; 
  return PI * radius * radius; 
};

// If the function has a single statement, we can use a simpler version, by omitting the keyword return and the curly brackets.
const circleAreaSimp = radius => 3.14 * radius * radius;
console.log(circleAreaSimp(2)); // 12.56

// If the function does not receive any argument
const hello = () => console.log('hello!');
hello(); // hello!


// Spread and rest operators 
//  we can turn arrays into parameters using the apply() function. Modern JavaScript has the spread operator (...) for this purpose.

const sum = (x, y, z) => x + y + z;
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6


// The spread operator (...) can also be used as a rest parameter in functions to replace arguments. 
const restParamaterFunction = (x, y, ...a) => (x + y) * a.length;
console.log(restParamaterFunction(1, 2, 'hello', true, 7)); // 9

// exponentiation operator is denoted by two asterisks (**). 
area = 3.14 * (radius ** 2);
  