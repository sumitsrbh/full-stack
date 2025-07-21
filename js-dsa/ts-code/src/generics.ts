// Generics are a powerful feature in TypeScript (and many other strongly typed programming languages) that allow you to write reusable code that can work with various types while maintaining type safety.

// Think of them as templates or blueprints for functions, classes, or interfaces that can be parameterized with different types.

// Let's modify the Comparable interface so we can define the type of the object the method compareTo should receive as an argument:

interface Comparable<T> {
  compareTo(b: T): number;
}

// By passing the type T dynamically to the Comparable interface – between the diamond operator <>, we can specify the argument type of the compareTo function:

class MyObject implements Comparable<MyObject> {
  age: number;
 
  constructor(age: number) {
    this.age = age;
  }
  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}


