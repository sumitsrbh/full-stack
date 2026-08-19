export const data = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        { name: 'D' },
        {
          name: 'E',
          children: [{ name: 'G' }],
        },
      ],
    },
    {
      name: 'C',
      children: [{ name: 'F' }],
    },
  ],
}

function lowestCommonAncestor(node, find1, find2) {
  if (node.name === find1 || node.name === find2) {
    return node
  }
  let result = []
  for (let child of node.children) {
    let subTree = lowestCommonAncestor(child, find1, find2)
    result = [...result, subTree]
  }
  if (result.length === 2) {
    return node
  }
}

console.log(lowestCommonAncestor(data, 'D', 'G'))
