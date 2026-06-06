const data = {
  name: 'A',
  children: [
    {
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

function collectAllNmes(node) {
  let names = [node.name]
  if (!node.children || node.children.length === 0) {
    return names
  }
  for (let child of node.children) {
    names = [...names, ...collectAllNmes(child)]
  }
  return names
}
console.log(collectAllNmes(data))
