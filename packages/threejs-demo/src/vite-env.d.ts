/// <reference types="vite/client" />

declare module '*.glb' {
  export default string
}

declare module '*.gltf' {
  export default string
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ThreeBase: any
}
