import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@api": `${path.resolve(__dirname, "./src/services/api")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@components": `${path.resolve(__dirname, "./src/pages/homes/components")}`,

    }
  },
   /* Config Global Scss Variable */
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/assets/scss/index.scss";` },
    }
  }
})
