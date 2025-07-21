// Ternary operators are expressions that evaluate to a value, whereas the if-statement is just an imperative statement. 
// means - This means we can use it directly within another expression, assign its result to a variable, or use it as an argument in a function call.


// switch statement provides an alternative way to write multiple if...else if chains.
switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  default:
    console.log('Month is not January, February or March');
}

// while loop. The script inside the while loop is executed while the condition is true.
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do...while loop, the condition is evaluated after the script is executed. The do...while loop ensures that the script is executed at least once.
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// The for…in loop iterates a variable over the properties of an object. This loop is especially useful when working with dictionaries and sets.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}
// output: a 1 b 2 c 3

// The for…of loop iterates a variable over the values of an Array, Map or Set as shown by the following code
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
// output: 1 2 3

