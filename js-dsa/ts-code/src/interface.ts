// In TypeScript, there are two concepts for interfaces: types and OOP interfaces.

// *Interface as a type
// In TypeScript, interfaces are a powerful way to define the structure or shape of objects.
// to run ts code -  npx tsc src/01-intro/08-typescript.ts 

//By default, TypeScript compiles to ECMAScript 3. The variable declaration as let and const was only introduced in ECMAScript 6. You can specify the target version by creating a tsconfig.json file

interface Person {
  name: string;
  age: number;
}
function printName(person: Person) {
  console.log(person.age);
}

const john = { name: 'John', age: 21 };
const mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);

