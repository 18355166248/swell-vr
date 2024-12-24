import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl({
      // 配置选项
      include: [
        // Glob pattern, or array of glob patterns to import
        '**/*.glsl',
        '**/*.wgsl',
        '**/*.vert',
        '**/*.frag',
        '**/*.vs',
        '**/*.fs',
      ],
      exclude: 'node_modules/**',
    }),
  ],
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
  server: {port: 3000},
})
