import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { Buffer } from 'buffer'

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      "~@fontsource/ibm-plex-mono": "@fontsource/ibm-plex-mono",
      "~@fontsource/inter": "@fontsource/inter",
    },
  },
  define: {
    'global.Buffer': Buffer,
  },
})
