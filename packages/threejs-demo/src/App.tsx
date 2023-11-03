import {useLayoutEffect, useRef} from 'react'
import initTexture from './Texture'

function App() {
  const textureRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let destroyTasks: unknown[] = []
    if (textureRef.current) {
      destroyTasks = initTexture(textureRef.current).destroyTasks
    }

    return () => {
      destroyTasks.forEach(task => typeof task === 'function' && task())
    }
  }, [])

  return (
    <div>
      <div ref={textureRef}></div>
    </div>
  )
}

export default App
