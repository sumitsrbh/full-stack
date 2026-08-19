const data = {
  name: 'root',
  children: [
    {
      name: 'src',
      children: [
        { name: 'a.js', size: 10 },
        { name: 'b.js', size: 50 },
      ],
    },
    {
      name: 'public',
      children: [{ name: 'logo.png', size: 100 }],
    },
  ],
}

function fileSmallerThan(node, size) {
  if (!node.children || node.children.length === 0) {
    // console.log(node.size, size, node.size < size)
    return node.size < size
  }
  // As soon as one child fails, stop
  for (let child of node.children) {
    if (!fileSmallerThan(child, size)) {
      return false
    }
  }

  return true
}
console.log(fileSmallerThan(data, 80))
