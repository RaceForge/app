import { defineConfig } from "vite"
import tailwindcss from '@tailwindcss/vite'
import kaioken from "vite-plugin-kaioken"

export default defineConfig({
  plugins: [kaioken(),
    tailwindcss()
  ],
})
