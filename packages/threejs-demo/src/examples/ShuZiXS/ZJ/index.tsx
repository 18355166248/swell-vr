import {useLayoutEffect, useRef} from 'react'
import * as THREE from 'three'

function Three() {
  const canvas = useRef<HTMLDivElement>(null)
  const threeReal = useRef<ThreeBase>()

  useLayoutEffect(() => {
    if (!canvas.current) return


    return () => {
      myThree.destroy()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <div ref={canvas} className="w-full h-full relative z-10" />
    </div>
  )
}

export default Three
