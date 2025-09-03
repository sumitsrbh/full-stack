function A(name) {
  ;(this.name = name),
    (this.sayHi = function () {
      console.log('Hello from A -', this.name)
    })
}

function B(name) {
  if (!new.target) {
    return new B(name)
  }
  this.name = name
  this.sayHi = function () {
    console.log('Hello from B- ', this.name)
  }
}

function C(name) {
  ;(this.name = name),
    (this.sayHi = function () {
      console.log('Method without this-', this.name)
    })
}

let a = new A('John')
let b = B('John') // * called without new

console.log(a == b)
a.sayHi()
b.sayHi()
