interface TagPros {
  name: string
}

function Tag({name}: TagPros) {
  return <div>{name}</div>
}

export default Tag
