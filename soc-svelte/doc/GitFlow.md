# Git Flow

## Init

```bash
git init
# 測試部署分支
git branch testing
# 開發分支
git branch develop
```

```mermaid
gitGraph
    commit id:"初始化"
    branch testing
    branch develop
    checkout testing
    checkout develop
    commit id:"開發線"
    checkout testing
    merge develop
    checkout main
    merge testing
```

## hasky

```bash
pnpm i -D husky
pnpm dlx husky-init
```

.husky/pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

#npm test
pmpm build
```
