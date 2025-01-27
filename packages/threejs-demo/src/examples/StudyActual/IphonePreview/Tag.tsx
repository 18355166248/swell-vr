interface TagPros {
  name: string
}

function Tag({name}: TagPros) {
  return (
    <div className="bg-green-300/50 text-yellow-500 border border-solid border-green-300 px-4 py-1 rounded-md text-xs">
      {name}
    </div>
  )
}

export default Tag
