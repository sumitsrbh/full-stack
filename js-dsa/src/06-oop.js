// Objects: these are the fundamental building blocks of OOP. They represent real-world entities or abstract concepts, encapsulating both data (properties) and behavior (methods).
// Classes: these are a more structured way to create objects. A class serves as a blueprint for creating multiple objects (instances) of a similar type.
// Encapsulation: this involves bundling data and the functions that operate on that data into a single unit (the object). It protects the object's internal state and allows you to control access to its properties and methods.
    //  In JavaScript, this is done using:
    // Closures
    // private fields (with #)
    // Getters and setters
// Inheritance: this allows us to create new classes (child classes) that inherit properties and methods from existing classes (parent classes). This promotes code reusability and establishes relationships between classes.
// Polymorphism: this means many forms. In OOP, it refers to the ability of objects of different classes to respond to the same method call in their own unique way.

// There are two ways of creating a simple object in JavaScript. 

let obj = new Object();

// the second way is
obj = {}; //  the second way is called an object literal
// a means to create and define objects directly in the code using a convenient notation. It is one of the most common ways to work with objects in JavaScript and also the preferred way over the new Object constructor

obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  }, // nested object
  address: 'Middle Earth'
};
// a JavaScript object, [key, value] pairs are used, where the key can be considered a property of the object and the value is the property value. In the previous example, address is the key, and its value is "Middle Earth". 
// Objects can contain other objects as their properties.
//In Object-Oriented Programming (OOP), an object is an instance of a class.
//A class defines the characteristics of the object and helps us with encapsulation, bundling the properties and methods so they can work as one unit.



class Book {
  #percentagePerSale = 0.12;
//   declare private properties by adding the prefix #
// is only visible inside the class and cannot be accessed directly.
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  // Inside the constructor, this refers to the object instance being created.In the case of our example, this is referencing itself. We could interpret the code as this book's title is being assigned the title value passed to the constructor.
  get price() {
    return this.pages * this.#percentagePerSale;
  } // getters , These can be used to declare a property that returns a calculated value based on the object's other properties.
  // price of the book depends on the number of pages (which is a public property) and the percentage of profit per sale, which is private.
  static copiesSold = 0;
  static sellCopy() {
    this.copiesSold++;
  } // Static properties are shared between all instances of the class, which is a fantastic way to keep track of properties that are shared between every object in the class (such as a count of how many books have been sold in total, for example).
  // Static methods do not require an instance of the class and can be accessed directly, such as Book.sellCopy().
  printIsbn() {
    console.log(this.isbn);
  } //  declare methods in a class
  // Methods are simply functions that are associated with the class. They define the actions or behaviors that objects created from the class (instances) can perform.
}

// To instantiate this class, we can use the following code:
let myBook = new Book('title', 400, 'isbn');
// Then, we can access its public properties and update them as follows:
console.log(myBook.title); // outputs the book title
myBook.title = 'new title'; // update the value of the book title
console.log(myBook.title); // outputs the updated value: new title
console.log(myBook.price); // 48

// And access the static property and method as follows:

console.log(Book.copiesSold); // 0
Book.sellCopy();
console.log(Book.copiesSold); // 1
Book.sellCopy();
console.log(Book.copiesSold); // 2


// Inheritance and polymorphism

//inheritance, which is a powerful mechanism in OOP that allows us to create new classes (child class) that derive properties and methods from existing classes (parent class or superclass). 

class Ebook extends Book {
  constructor(title, pages, isbn, format) {
    super(title, pages, isbn);
    this.format = format;
  }
  printIsbn() {
    console.log('Ebook ISBN:',this.isbn);
  } // By overriding methods from the superclass, we can achieve a concept called polymorphism,
}
Ebook.sellCopy();
console.log(Ebook.copiesSold); // 3

// it is good to remember that JavaScript object-oriented programming is done through a prototype.
// polymorphism
const myBook = new Book('title', 400, 'isbn');
myBook.printIsbn(); // isbn
const myEbook = new Ebook('DS Ebook', 401, 'isbn 123', 'pdf');
myEbook.printIsbn(); // Ebook ISBN: isbn 123