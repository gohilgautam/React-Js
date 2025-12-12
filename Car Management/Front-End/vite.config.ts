import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/addcar': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/fetchallcars': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/updatecar': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/deletecar': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
