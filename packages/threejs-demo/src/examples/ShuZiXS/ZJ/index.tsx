import {useLayoutEffect, useRef} from 'react'
import MapControl from '../MapControlStudy'
import ZheJiangData from '../../../data/map/zhejiang.json'
import Animate1 from '../assets/mov/animate.mov'
import Animate2 from '../assets/mov/animate2.mov'

function Three() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const mapRef = useRef<MapControl>()

  useLayoutEffect(() => {
    if (!canvas.current) return

    const mapControl = new MapControl(canvas.current, {
      centroid: ZheJiangData.properties.centroid as [number, number],
    })
    mapRef.current = mapControl

    return () => {
      mapControl.destroy()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvas} id="canvas" className="w-full h-full relative" />
      <video
        className="map-gd-video map-gd-video1"
        width="250"
        height="100"
        loop
        crossOrigin="anonymous"
        playsInline
        style={{display: 'none'}}
      >
        <source src={Animate1} />
      </video>
      <video
        className="map-gd-video map-gd-video2"
        width="250"
        height="100"
        loop
        crossOrigin="anonymous"
        playsInline
        style={{display: 'none'}}
      >
        <source src={Animate2} />
      </video>
    </div>
  )
}

export default Three
