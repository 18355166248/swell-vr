import * as d3geo from 'd3-geo'

let geoFun: d3geo.GeoProjection
export function initGeoFun(size: number) {
  //放大倍数
  geoFun = d3geo.geoMercator().scale(size || 100)
}

export const latLng2px = (pos: [number, number]) => {
  if (pos[0] >= -180 && pos[0] <= 180 && pos[1] >= -90 && pos[1] <= 90) {
    return geoFun(pos)
  }
  return pos
}
