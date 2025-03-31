const districtStyle = {
  enabled: true,
  heightScale: 0.6,
  fill: {
    color: 'rgba(0,255,255,0.9)',
    map: '',
    normalMap:
      'https://lf-digitaltwin-cim.bytetos.com/obj/bytedcimplus/nextzen/{z}/{x}/{y}.png',
    normalScale: 20,
    metalness: 0.2,
    roughness: 0.8,
    opacity: 1,
  },
  innerShadow: {
    enabled: true,
    shadowColor: 'rgba(252,228,14,1)',
    shadowBlurScale: 0.1,
  },
  boundaryStreamer: {
    enabled: true,
    lineLength: 60,
    lineWidth: 5,
    lineHeadColor: '#895EE6',
    lineColor: '#6392FF',
    lineHeadRatio: 0.2,
    speed: -10,
  },
  sideConfig: {
    map: null,
    colorConfig: {
      type: 'linear',
      range: ['rgb(255, 204, 255)', 'rgba(1,61,128,0.58)'],
    },
  },
  stroke: {color: 'rgba(154,184,254,0.8)', opacity: 1, width: 2},
  bottomStroke: {color: '#69dcbe', opacity: 1, width: 0},
}

export {districtStyle}
