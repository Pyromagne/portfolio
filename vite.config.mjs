import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': { 
        target: 'https://wakatime.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: { outDir: 'build' },
  test: { globals: true, environment: 'jsdom', setupFiles: './src/setupTests.js' },
});