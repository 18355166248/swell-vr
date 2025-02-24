import {useLayoutEffect, useRef} from 'react'
import Map from './map'

export default function Map3DExample() {
  const textureRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map>()

  useLayoutEffect(() => {
    if (!textureRef.current) return
    mapRef.current = new Map(textureRef.current)

    mapRef.current.init()

    return () => {
      if (mapRef.current) {
        for (const task of mapRef.current.destroyTasks) {
          task()
        }
      }
    }
  }, [])

  return <div ref={textureRef} className="w-full h-full"></div>
}
