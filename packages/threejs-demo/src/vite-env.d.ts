/// <reference types="vite/client" />

declare module '*.glb' {
  export default string
}

declare module '*.gltf' {
  export default string
}

declare module '*.js'

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ThreeBase: any
}

declare module 'three-vignette-background'
