import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Since this is a user page (sepehrfazeli.github.io), use root path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'swiper': ['swiper'],
          'vendor': ['three/examples/jsm/Addons.js']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
