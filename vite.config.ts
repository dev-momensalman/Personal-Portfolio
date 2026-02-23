import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Personal-Portfolio/', // تأكد أن الاسم يطابق اسم المستودع بالظبط
  build: {
    outDir: 'docs', // بما أننا قررنا الرفع من مجلد docs
  }
})
