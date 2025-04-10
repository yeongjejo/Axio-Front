import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 또는 '0.0.0.0'
    proxy: {
      // API 서버의 URL을 설정합니다.
      '/ws': {
        target: 'http://localhost:8084', // API 서버 주소
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/ws/, ''), // 필요시 경로를 변경합니다.
        secure: false,
      },
    },
  }
})
