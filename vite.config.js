import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/images': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false  // allow self-signed certs (dev-only)
      },
      '/hotels': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/users': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api-docs': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false
      },
      '/v3/api-docs': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false
      }
  }
  }
});
