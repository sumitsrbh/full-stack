function printNumbers(from, to) {
  let id = setInterval(() => {
    console.log(from++)
    if (from > to) clearInterval(id)
  }, 1000)
}
// printNumbers(10, 15)

//using nested setTimeout method
function printNumbers2(from, to) {
  let id = setTimeout(function tick() {
    console.log(from)
    if (from < to) {
      from++
      id = setTimeout(tick, 1000)
    }
  }, 1000)
}

printNumbers2(20, 30)
