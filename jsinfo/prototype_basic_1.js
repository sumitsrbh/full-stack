let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__:table
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table
};

let pockets = {
  money: 2000,
  __proto__:bed
};


// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.