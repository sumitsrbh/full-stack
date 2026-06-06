const data = {
  name: 'root',
  children: [
    {
      name: 'src',
      children: [
        { name: 'index.js' },
        { name: 'app.js' },
        { name: 'style.css' },
      ],
    },
    {
      name: 'public',
      children: [{ name: 'logo.png' }, { name: 'favicon.ico' }],
    },
  ],
}

function countFileByExtension(node) {
  if (!node.children || node.children.length === 0) {
    const [name, ext] = node.name.split('.')
    return { [ext]: 1 }
  }

  return node.children.reduce((acc, a) => {
    let childResult = countFileByExtension(a)
    // console.log('childResult', childResult)
    for (let key of Object.keys(childResult)) {
      acc[key] = (acc[key] || 0) + childResult[key]
    }
    return acc
  }, {})
}

console.log(countFileByExtension(data))
