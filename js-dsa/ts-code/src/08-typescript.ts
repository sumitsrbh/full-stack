//  npx is the Node Package eXecute, meaning it is a package runner that we will use to execute the TypeScript compiler command.

// tsc is the TypeScript compiler command and will compile and transform the source code from src/01-intro/08-typescript.ts into JavaScript.

// TypeScript does all the type and error checking during compile-time, it does not prevent the compiler from generating JavaScript code.

let myName = 'Packt';
myName = 10;


// when do we type a variable? If we declare the variable and do not initialize it with a value, then it recommended to assign a type as demonstrated by the code below:
let favoriteLanguage: string;
let langs = ['JavaScript', 'Ruby', 'Python'];
favoriteLanguage = langs[0];
// If we do not type a variable, then it is automatically typed as any, meaning it can receive any value, as it is in JavaScript.

