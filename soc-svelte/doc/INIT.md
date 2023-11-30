### 初始化

```bash
pnpm create vite
```

1. 選擇 svelte
2. 選取 typescript

```bash
cd [項目名稱]
git init
pnpm i
pnpm add -D @types/node
```

3. [創建 .prettierrc](https://gitlab.dgiots.com/-/snippets/1)

### $lib 絕對路徑

vite.config.ts

```javascript
export default defineConfig({
  resolve: {
    alias: {
      $src: path.resolve(__dirname, 'src'),
      $lib: path.resolve(__dirname, 'src'),
      '*': ['node_modules/*'],
    },
  },
})
```

tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".", // Required for path aliases
    "paths": {
      "$src/*": ["src/*"],
      "$lib/*": ["src/*"],
      "svelte-routing": ["node_modules/svelte-routing"] //fix svelte-routing ts bug..
    }
  }
}
```

### 創建服務器

```bash
pnpm add express compression
```

1. [建立 `app/app.js`](https://gitlab.dgiots.com/-/snippets/2)

## 開發模式

```bash
pnpm dev
```

## 部署模式

1. `pachage.json` 新增命令

```json
{
  "scripts": {
    "start": "node app/app.js"
  }
}
```

2. 新增 [Dockerfile](https://gitlab.dgiots.com/-/snippets/3)
3. 新增 [docker-compose.yml](https://gitlab.dgiots.com/-/snippets/4)

- 修改 container_name 與 image
