import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolvePath } from 'react-router-dom'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: [{ find: '@', replacement: resolvePath(__dirname, './src') }],
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  }
})
