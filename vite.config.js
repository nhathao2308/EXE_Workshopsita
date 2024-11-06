import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'
// Simulate __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/font/font.scss";`,
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Ensure @ maps to the src directory
      // Add the following line to match the tsconfig alias
      utils: path.resolve(__dirname, './src/lib/utils'), // Maps utils to lib/utils
      components: path.resolve(__dirname, './src/components'), // Maps components to src/components
      ui: path.resolve(__dirname, './src/components/ui'), // Maps ui to src/components/ui
    },
  },
})
