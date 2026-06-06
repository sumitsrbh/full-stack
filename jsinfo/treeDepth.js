const data = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        { name: 'D' },
        {
          name: 'E',
          children: [{ name: 'F', children: [{ name: 'G' }] }],
        },
      ],
    },
    {
      name: 'C',
    },
  ],
}

console.log(Array.isArray(data.children))
console.log(data.children)

function findDepth(node) {
  if (!node.children || node.children.length === 0) {
    return 1
  }
  const depths = node.children.map((child) => findDepth(child))
  return 1 + Math.max(...depths)
}

findDepth(data)
