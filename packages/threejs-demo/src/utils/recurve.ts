const a = [
  'Creations/SwellVR',
  'Creations/Texture',
  'Study/01',
  'SS/AA/BB',
  'SS/EE/FF',
  'SS/AA/CC',
  // '1',
  // '2',
  // '3',
  // '4',
  // '5',
  // '6',
  // '7',
  // '8',
  // '9',
  // '10',
]
const sep = '/'

interface PathsParam {
  label: string
  key: string
  children?: PathsParam[]
}

export function recurve(paths = a) {
  const root: PathsParam[] = []

  paths.forEach(path => {
    const parts = path.split(sep)
    addToTree(root, parts, '')
  })

  return root
}

function addToTree(tree: PathsParam[], parts: string[], parentPath: string) {
  if (parts.length === 0) return

  const [first, ...rest] = parts
  let node = tree.find(item => item.label === first)

  const curParentPath = parentPath + sep + first
  if (!node) {
    node = {label: first, key: curParentPath}
    tree.push(node)
  }

  if (rest.length > 0) {
    !node.children && (node.children = [])
    addToTree(node.children, rest, curParentPath)
  }
}
