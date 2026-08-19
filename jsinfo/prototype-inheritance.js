#! /usr/bin/env node


let animal={
    eats: true
}

//create an new object with animal as a prototype 
let rabbit= Object.create(animal)

console.log(rabbit.eats)
console.log()

