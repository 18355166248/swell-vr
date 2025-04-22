import MapApplication from './MapApplication/MapApplication'
import {MapControlOptions} from './types'

class MapControlStudy extends MapApplication {
  pointCenter: [number, number]
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    super(container, options)
    this.container = container
    this.pointCenter = options.centroid
  }

  destroy() {
    super.destroy()
  }
}

export default MapControlStudy
