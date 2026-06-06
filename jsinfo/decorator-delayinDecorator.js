function delay(f, ms) {
  return function (...arg) {
    setTimeout(() => {
      return f.apply(this, arg)
    }, ms)
  }
}

function f(x) {
  console.log(x)
}

let f1000 = delay(f, 1000)
let f1500 = delay(f, 1500)

f1000('test') // shows "test" after 1000ms
f1500('test') // shows "test" after 1500ms
