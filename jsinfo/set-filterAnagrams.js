let str = 'nap'
let str1 = 'pan'
let str2 = 'teachers'
let map = new Set(str)
let map1 = new Set(str1)
let map2 = new Set(str2)
console.log(map)
console.log(map1)
console.log(map.has() == map1.has())
console.log(map.has() == map2.has())

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

function aclean(arr) {
  let map = new Map()
  for (let word of arr) {
    let sortedWrd = word.toLowerCase().split('').sort().join('')
    map.set(sortedWrd, word)
  }
  return Array.from(map.values())
}
console.log(aclean(arr))
