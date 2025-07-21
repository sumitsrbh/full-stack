// If a function doesn't have a return statement (as in the sayHello example above) or reaches the end of its code block without encountering a return, it implicitly returns undefined.
// 
function sumDefault(num1, num2 = 2) { // num2 has a default value
    return num1 + num2;
}
console.log(sumDefault(1)); // outputs 3
console.log(sumDefault(1, 3)); // outputs 4