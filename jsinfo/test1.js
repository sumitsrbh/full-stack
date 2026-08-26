function Foo(x) {
  function bar() {
    return x
  }

  this.baz = function () {
    return x
  }
}

Foo.prototype.baz = function () {
  return x
}

const obj = new Foo(10)

obj.baz() <-  10 

obj.bar() <- undefined 

// because the object instance firstly look for method which will be in the Foo function, which available and it has no access to x.

this.baz = function () {   
  return x
}

// this one, as only after not found in the defination it will look in the prototype 


this.bar = bar // now this bar will be accessible

obj.bar()  // bar is private.