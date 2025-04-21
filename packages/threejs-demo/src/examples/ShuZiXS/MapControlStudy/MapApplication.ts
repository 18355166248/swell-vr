import {MapControlOptions} from './types'

class MapApplication {
  container: HTMLCanvasElement
  options: MapControlOptions
  constructor(container: HTMLCanvasElement, options: MapControlOptions) {
    this.container = container
    this.options = options
  }

  destroy() {}
}

export default MapApplication
