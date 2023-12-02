import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import TurboConsole from 'vite-plugin-turbo-console'
import { VitePWA } from 'vite-plugin-pwa'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
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
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        display: 'fullscreen',
        start_url: '/',
        id: '/',
      },
    }),
    webUpdateNotice({
      notificationProps: {
        title: '新版本上線',
        description: '請重整頁面以更新',
        buttonText: '更新',
      },
    }),
  ],
  resolve: {
    alias: {
      $src: path.resolve(__dirname, 'src'),
      $lib: path.resolve(__dirname, 'src'),
    },
  },
  define: {
    __APP_NAME__: JSON.stringify(config.name),
    __APP_VERSION__: JSON.stringify(config.version),
  },
})
