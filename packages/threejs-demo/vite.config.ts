import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['THREE'],
          react: ['react', 'react-dom'],
          'swell-vr': ['swell-vr'],
        },
      },
    },
  },
})
