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


//OOP interface
// An interface is a contract. In this contract, we can define what behavior the classes or interfaces that will implement this contract should have.
// ECMAScript is an interface for the JavaScript language. It tells the JavaScript language what functionalities it should have, but each browser might have a different implementation of it.

interface Comparable {
  compareTo(b): number;
}
class MyObject implements Comparable {
  age: number;
 
  constructor(age: number) {
    this.age = age;
  }
  compareTo(b): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

// To demonstrate the concept of polymorphism, we can use the code below:
function compareTwoObjects(a: Comparable, b: Comparable) {
  console.log(a.compareTo(b));
  console.log(b.compareTo(a));
}