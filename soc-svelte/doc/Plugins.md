## Plugins

### 加強版 Console.log

```js
import TurboConsole from 'vite-plugin-turbo-console'

export default defineConfig({
  plugins: [
    TurboConsole({
      disableLaunchEditor: true,
    }),
  ],
})
```

### 版號 log

1. 新增代碼 [logVersion.ts](https://gitlab.dgiots.com/-/snippets/5)

2. 新增定義 `vite.config.ts`

```js
import { defineConfig } from 'vite'
import package from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_NAME__: JSON.stringify(package.name),
    __APP_VERSION__: JSON.stringify(package.version),
  },
})
```

3. 新增定義 `vite-env.d.ts`

```js
declare const __APP_NAME__: string
declare const __APP_VERSION__: string
```

### 擴充件事件

[svelte-preprocess-delegate-events](https://github.com/baseballyama/svelte-preprocess-delegate-events)

### Picocss

[https://v2.picocss.com/](https://v2.picocss.com/)

loading...

```html
<button aria-busy="true">Please wait…</button> <button aria-busy="true" class="secondary"></button>
```

Tooltip

```html
<p>Tooltip on a <a href="#" data-tooltip="Tooltip">link</a></p>
<p>Tooltip on <em data-tooltip="Tooltip">inline element</em></p>
<p><button data-tooltip="Tooltip">Tooltip on a button</button></p>
```
