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
    VitePWA({ registerType: 'autoUpdate' }),
    webUpdateNotice({
      notificationProps: {
        title: `新版本升級 ${config.version}`,
        description: '系統更新，請重新整理頁面',
        buttonText: '重新整理並升級',
        dismissButtonText: '忽略',
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
