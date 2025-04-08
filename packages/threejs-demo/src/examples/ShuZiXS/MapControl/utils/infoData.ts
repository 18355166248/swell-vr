class fe {
  onLoadCallback: () => void
  constructor(e = () => {}) {
    this.onLoadCallback = e
    this.init()
  }
  init() {
    this.instance = new ResourceManager()
    this.instance.addLoader(E, 'FileLoader')
    this.instance.on('onProgress', (r, t, n) => {
      ;((t / n) * 100).toFixed(2) + ''
    })
    this.instance.on('onLoad', () => {
      this.onLoadCallback && this.onLoadCallback()
    })
    const e = '/sayhello-site/',
      a = [
        {type: 'Texture', name: 'huiguang', path: Q},
        {type: 'Texture', name: 'watermark', path: H},
        {type: 'Texture', name: 'rotationBorder1', path: J},
        {type: 'Texture', name: 'rotationBorder2', path: $},
        {type: 'Texture', name: 'guangquan1', path: M},
        {type: 'Texture', name: 'guangquan2', path: W},
        {type: 'Texture', name: 'chinaBlurLine', path: V},
        {type: 'Texture', name: 'ocean', path: U},
        {type: 'Texture', name: 'side', path: I},
        {type: 'Texture', name: 'flyLine', path: K},
        {type: 'Texture', name: 'flyLineFocus', path: M},
        {type: 'Texture', name: 'pathLine', path: X},
        {type: 'Texture', name: 'arrow', path: Y},
        {type: 'Texture', name: 'point', path: Z},
        {type: 'File', name: 'zhejiang', path: e + 'assets/json/浙江省.json'},
        {
          type: 'File',
          name: 'china',
          path: e + 'assets/json/中华人民共和国.json',
        },
      ]
    this.instance.loadAll(a)
  }
}

export default {
  fe,
}
