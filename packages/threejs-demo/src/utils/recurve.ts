const a = [
  'Creations/SwellVR',
  'Creations/Texture',
  'Study/01',
  'SS/AA/BB',
  'SS/EE/FF',
  'SS/AA/CC',
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
    addToTree(root, parts)
  })

  return root
}

function addToTree(tree: PathsParam[], parts: string[]) {
  if (parts.length === 0) return

  const [first, ...rest] = parts
  let node = tree.find(item => item.label === first)

  if (!node) {
    node = {label: first, key: first}
    tree.push(node)
  }

  if (rest.length > 0) {
    !node.children && (node.children = [])
    addToTree(node.children, rest)
  }
}
