import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      'react-icons/fa',
      'framer-motion',
      'react-vertical-timeline-component',
      '@react-three/fiber',
      '@react-three/drei',
      'three'
    ],
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
  base: '/portfolio-automacao/' // Necessário para GitHub Pages
})