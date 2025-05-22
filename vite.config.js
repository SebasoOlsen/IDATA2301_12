import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-docs': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false
      },
      '/api/bookings/account/user': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/favourites/account/user': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/hotels/admin/allHotels': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/hotels/admin/createHotel': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/login/account/logout': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/login/public/isLoggedIn': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/api/login/public/process': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/bookings': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/favourites': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/hotels': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/images': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false  // allow self-signed certs (dev-only)
      },
      '/users': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false // allow self-signed certs (dev-only)
      },
      '/v3/api-docs': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
