const heading = document.querySelector('.title')

console.log(heading)
console.log(heading.textContent)

const input = document.querySelector('#username')

console.log(input)
console.log(input.value)
console.log(input.getAttribute('value'))

const box = document.getElementById('box')

let passiveVal = false

box.addEventListener(
  'wheel',
  (event) => {
    event.preventDefault()
    console.log('wheel')
  },
  { passive: passiveVal ?? true },
)
const enable = document.getElementById('enablePassive')
enable.addEventListener('click', {
  passiveVal= true
})

