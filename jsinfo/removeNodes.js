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

function removeNodeImmutable(node, target) {
  // remove this subtree completely
  if (node.name === target) {
    return null
  }

  // leaf node survives
  if (!node.children || node.children.length === 0) {
    return { ...node }
  }

  // build NEW cleaned children array
  let cleanedChildren = []

  for (let child of node.children) {
    const cleanedChild = removeNodeImmutable(child, target)

    // keep only valid cleaned subtrees
    if (cleanedChild !== null) {
      cleanedChildren = [...cleanedChildren, cleanedChild]
    }
  }

  // rebuild NEW node
  return {
    ...node,
    children: cleanedChildren,
  }
}
console.log(collectAllNames(removeNodeImmutable(data, 'E')))

function removeNode(node, target) {
  if (!node.children || node.children.length === 0) {
    return null
  }
  for (let child of node.children) {
    child.name === target
      ? (node.children = node.children.filter((t) => t.name !== target))
      : removeNode(child, target)
  }
}
// removeNode(data, 'F')
// console.log('Mutated', data)

function collectAllNames(node) {
  let names = [node.name]

  if (!node.children || node.children.length === 0) {
    return names
  }

  for (let child of node.children) {
    const childNames = collectAllNames(child)

    names = [...names, ...childNames]
  }

  return names
}

console.log(collectAllNames(data))
