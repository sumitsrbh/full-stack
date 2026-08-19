const data = {
  name: 'root',
  children: [
    {
      name: 'src',
      children: [{ name: 'index.js' }, { name: 'app.js' }],
    },
    {
      name: 'public',
      children: [{ name: 'favicon.ico' }],
    },
  ],
}

function flattenFileSys(node, currentPath = '') {
  const fullPath = currentPath ? `${currentPath}/${node.name}` : node.name

  if (!node.children || node.children === 0) {
    return [fullPath]
  }
  let paths = []

  for (let child of node.children) {
    let childPaths = flattenFileSys(child, fullPath)
    console.log('returnd', childPaths)
    paths = [...paths, ...childPaths]
  }
  return paths
}
console.log(flattenFileSys(data))
