import './app.css'
import App from '$lib/view/App.svelte'
import { logVersion } from '$lib/utils/logVersion'

const app = new App({
  target: document.getElementById('app') as HTMLElement,
})

export default app

logVersion({ name: __APP_NAME__, version: __APP_VERSION__ })
