import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//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
// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  plugins: [tailwindcss(),react()],
//   base:process.env.VITE_BASE_PATH || "/Sell_Software_license",
})
