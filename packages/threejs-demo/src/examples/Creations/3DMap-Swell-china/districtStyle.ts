const districtStyle = {
  fill: {
    color: 'rgba(213, 219, 37, 0.8)', // 调整透明度，让阴影更明显
  },
  innerShadow: {
    enabled: true,
    shadowColor: 'rgba(0, 70, 200, 0.9)', // 深蓝色，增强对比度
    shadowBlurScale: 0.2, // 增加阴影模糊范围
  },
  sideConfig: {
    map: null,
    colorConfig: {
      type: 'linear',
      range: ['rgb(255, 204, 255)', 'rgba(1, 61, 128, 0.58)'],
    },
  },
}

export {districtStyle}
