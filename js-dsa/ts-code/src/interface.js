// In TypeScript, there are two concepts for interfaces: types and OOP interfaces.
function printName(person) {
    console.log(person.age);
}
var john = { name: 'John', age: 21 };
var mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);
