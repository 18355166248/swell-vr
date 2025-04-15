import {useLayoutEffect, useRef} from 'react'
import MapControl from '../MapControl'
import ZheJiangData from '../../../data/map/zhejiang.json'

function Three() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    if (!canvas.current) return

    const mapControl = new MapControl(canvas.current, {
      centroid: ZheJiangData.properties.centroid as [number, number],
      center: ZheJiangData.properties.center as [number, number],
    })

    return () => {
      mapControl.destroy()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvas}
        id="canvas"
        className="w-full h-full relative z-10"
      />
    </div>
  )
}

export default Three
