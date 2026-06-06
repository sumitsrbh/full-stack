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

function findLargestFile(node) {
  if (!node.children || node.children.length=== 0) {
    return node
  }
  let leafArry = []
  for (let child of node.children) {
    let leafNode = findLargestFile(child)
    leafArry = [...leafArry, leafNode]
  }
  largest = leafArry.reduce(
    (acc, a) => {
      if (a.size > acc.size) {
        acc = a
        return acc
      }
      return acc
    },
    { name: 'infinitiy', size: Number.NEGATIVE_INFINITY },
  )
  return largest
}
console.log(findLargestFile(data))
