import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Personal-Portfolio/',
  plugins: [inspectAttr(), react()],
  build: {
    outDir: 'docs', // GitHub Pages will serve from this folder
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
