// Enums
// Enums (short for Enumerations) are a way to define a set of named constants. They help organize your code and make it more readable by giving meaningful names to values.

interface Comparable<T> {
  compareTo(b: T): number;
}

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

enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0
}// When working with comparing values or objects, which is quite common in sorting algorithms, we often see values such as -1, 1 and 0. But what do these numbers mean?

function compareTo(a: MyObject, b: MyObject): number {
  if (a.age === b.age) {
    return Compare.EQUALS;
  }
  return a.age > b.age ? Compare.BIGGER_THAN : Compare.LESS_THAN;
}  

// Type aliases
// TypeScript also has a cool feature called type aliases. It allows you to create new names for existing types. It also makes code easier to understand, especially when you are dealing with complex types

type UserID = string;
type User = {
  id: UserID;
  name: string;
} // n the preceding example, we are creating a type named UserID that is an alias for a string. And when declaring the second type User, we are saying that the id is of type UserID, making it easier to read the code and understand what the id means
