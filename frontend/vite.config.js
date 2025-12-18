import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/algo-visualizer-pro/',
  server: {
    host: true,
    port: 5173
  }
})

