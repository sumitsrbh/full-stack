const data = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [{ name: 'D' }, { name: 'E' }],
    },
    {
      name: 'C',
    },
  ],
}

//* Problem — Find Node
let count = 0
function findNode(node, target) {
  ++count
  if (node.name === target) {
    return node
  }
  if (!node.children || node.children.length === 0) {
    return null
  }

  for (let child of node.children) {
    const result = findNode(child, target)
    if (result) {
      return result
    }
  }
  return null
}
findNode(data, 'E')
console.log('count', count)
