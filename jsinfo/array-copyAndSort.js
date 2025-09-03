let arr = ['HTML', 'JavaScript', 'CSS']
function copySorted(arr) {
  let newArr = []
  arr.forEach((element) => {
    newArr.push(element)
  })
  return newArr.sort()
}

console.log(copySorted(arr))
console.log(arr)

function copySortedOptmzd(arr) {
  return arr.slice().sort()
}
console.log('SLICE', copySortedOptmzd(arr))
