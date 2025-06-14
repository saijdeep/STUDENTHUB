import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }

  },
  allowedHosts: [
      'localhost',
<<<<<<< HEAD
      'studenthub-4.onrender.com',
      'studenthub-5.onrender.com' // Added new Render frontend URL
=======
      'studenthub-4.onrender.com' // Added Render frontend URL
>>>>>>> a615e54c59df449cc1e5c6fcf1d9ece29ef3fc80
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux']
  },
})
