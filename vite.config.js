import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-docs': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false
      },
      '/api/bookings/account/user': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/favourites/account/user': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/login/account/logout': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/login/public/isLoggedIn': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/login/public/process': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/bookings': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/favourites': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/hotels': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/images': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false  // allow self-signed certs (dev-only)
      },
      '/users': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/v3/api-docs': {
        target: "https://localhost:8443",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
