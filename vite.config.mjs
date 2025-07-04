import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'build' },
  test: { globals: true, environment: 'jsdom', setupFiles: './src/setupTests.js' },
})
