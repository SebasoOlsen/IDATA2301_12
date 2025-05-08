import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/pictures': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false  // allow self-signed certs (dev-only)
      },
      '/api': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/users': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
  }
  }
});
