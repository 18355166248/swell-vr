import {Group} from 'three'
import Flower from './flower'
import BasicLight from './lights'
import Land from './land'

export default class SeedScene extends Group {
  constructor() {
    super()

    const flower = new Flower()
    const land = new Land()
    const lights = new BasicLight()

    this.add(flower, land, lights)
  }

  update(time: number) {
    this.rotation.y = time / 10_00
  }
}
