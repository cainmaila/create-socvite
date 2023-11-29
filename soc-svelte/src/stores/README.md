# Store

全域狀態機， `writable` 或 `derived` 均放此處

> 常用 ⭐⭐⭐⭐⭐

# store 關係

```mermaid
graph TD;
subgraph store1
data-->B
A-->B;
A-->C;
end
subgraph store2
info-->D
B-->D;
D-->E;
D-->F;
end
```
