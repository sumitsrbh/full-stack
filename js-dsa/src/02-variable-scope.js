// The scope refers to where in the algorithm we can access the variable. 

let movie = 'Lord of the Rings';
function starWarsFan() {
  const movie = 'Star Wars'; // This is called "shadowing", where the local variable hides the global one within the function's context. 
  return movie;
}
function marvelFan() {
  movie = 'The Avengers'; // it directly modifies the global movie variable by assigning it the value "The Avengers". This is possible because there is no local variable to shadow the global one.
  return movie;
}

console.log(movie); // Lord of the Rings
console.log(starWarsFan()); // Star Wars
console.log(marvelFan()); // The Avengers
console.log(movie); // The Avengers

console.log("=======Next code========");

function blizzardFan() {
  const isFan = true;
  let phrase = 'Warcraft';
  console.log('Before if: ' + phrase);
  if (isFan) {
    let phrase = 'initial text'; // block-scoped variable that shadows the outer phrase variable.
    phrase = 'For the Horde!';
    console.log('Inside if: ' + phrase);
  }
  phrase = 'For the Alliance!';
  console.log('After if: ' + phrase);
}
blizzardFan()

console.table([
  { Feature: 'Scope', var: 'Function-scoped', let_const: 'Block-scoped' },
  { Feature: 'Hoisting', var: 'Yes (undefined)', let_const: 'Yes (not initialized)' },
  { Feature: 'Redeclaration', var: 'Allowed', let_const: 'Not allowed' },
  { Feature: 'Reassignment', var: 'Allowed', let_const: 'let: allowed, const: not allowed' },
]);

// Hoisting


