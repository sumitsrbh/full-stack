let car = {
  brand: 'Toyota',
  showBrand() {
    console.log('Car brand', this.brand)
  },
}

const show = car.showBrand
show() // why undefined
car.showBrand()

// * this not bound to only method of objects
let user = { name: 'john' }
let admin = { name: 'admin' }

function sayHi() {
  console.log('In function ', this.name)
}

// * can't call directly
user.sayHi()

// * we have to attack it to object first.
user.f = sayHi
admin.f = sayHi

// then we make the call.
user.f()
admin.f()
