import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   host:"0.0.0.0",
  //   port:5173
  // }
  build: {
    chunkSizeWarningLimit: 1000, // Set this to your desired limit in KB
  },
})
