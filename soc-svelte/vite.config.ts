import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import TurboConsole from 'vite-plugin-turbo-console'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import config from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    svelte(),
    TurboConsole({
      disableLaunchEditor: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
      },
      manifest: {
        name: 'soc-svelte-vite-template',
        short_name: 'SOC PWA',
        description: 'SOC Svelte Vite Template',
        theme_color: '#ff6739',
        icons: [
          {
            src: 'images/logo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
          },
        ],
        display: 'fullscreen',
        start_url: '/',
        id: '/',
      },
    }),
  ],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, 'src', 'lib'),
      $assets: path.resolve(__dirname, 'src', 'assets'),
    },
  },
  define: {
    __APP_NAME__: JSON.stringify(config.name),
    __APP_VERSION__: JSON.stringify(config.version),
  },
})
