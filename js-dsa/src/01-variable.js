var num = 1;
num = "one";
let myVar = 2;
myVar = 4;
const price = 1.5;

// A total of eight data types are available in the EMCAScript- these are primitive data types.

const prrice = 1.5; // number
const publisher = "Packt"; // string
const javaScriptBook = true; // boolean
const nullVar = null; // null
let und; // undefined
let obj = {
  name: "temp",
  age: 12,
}; // object
// object is a fundamental data structure that serves as a collection of key-value pairs.
// key-value pairs are often referred to as properties or methods of the object.
//  powerful way to structure data, encapsulate logic, and model real-world entities.

console.log("num: " + prrice);
console.log("obj" + obj); // will not display the object.
console.log("obj", obj);
console.log("typeof nullVar: ", typeof nullVar); // object,
//This is considered a historical quirk or bug in the language.

obj.name = "New name";
// Mutaing an object means changing the properties within the existing object as we just did.
console.log("Mutating obj",obj);


let obj1 = {
  name: "Reassigned name",
  age: 12,
};
console.log("obj1:", obj1);

obj1={name:'Name Reassigned agained'}
console.log("obj1 after reassignment ",obj1);
// Reassigning an object means changing the entire object that a variable refers to


// JavaScript also supports a special and unique data type called symbol. Symbols serve as unique identifiers
// primarily used for - Unique property keys, Hidden properties

const title = Symbol('title');
const book3 = {
  [title]: 'Data Structures and Algorithms'
};
console.log(book3[title]); // Data Structures and Algorithms
// we are creating a symbol title and using it as a key for the book3 object.
// we cannot simply use book3.title using the dot notation, but book3.[title], using the brackets notation.
