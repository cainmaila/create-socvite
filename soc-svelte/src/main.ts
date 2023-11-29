import './app.css'
import Router from '$lib/Router.svelte'
import { logVersion } from '$lib/utils/logVersion'

const app = new Router({
  target: document.getElementById('app') as HTMLElement,
})

export default app

logVersion({ name: __APP_NAME__, version: __APP_VERSION__ })
