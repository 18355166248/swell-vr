import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js'

export default function initCSSRender() {
  const CSSRender = new CSS2DRenderer()
  CSSRender.setSize(window.innerWidth, 1080)
  CSSRender.domElement.style.position = 'absolute'
  CSSRender.domElement.style.top = '0'

  function destroy() {
    if (CSSRender.domElement.parentNode) {
      CSSRender.domElement.parentNode.removeChild(CSSRender.domElement)
    }
  }

  return {CSSRender, destroy}
}
