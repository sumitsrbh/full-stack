const node = {
  name: 'A',
  children: [    {
      name: 'B',
      children: [
        { name: 'D' },
        {
          name: 'E',
          children: [{ name: 'F' }],
        },
      ],
    },
    {
      name: 'C',
    },
  ],
}
function findPath(node, target, path = []) {
  // path creation
  const currentPath = [...path, node.name]
//   console.log(currentPath)
  //base condition
  if (node.name === target) {
    return currentPath
  }
  if (!node.children || node.children.length === 0) {
    return null
  }
  for (let child of node.children) {
     findPath(child, target, currentPath)
  }
}

findPath(node, 'F')
