# controller

主線狀態邏輯，整個網站只需掛載一次，(建議統一掛載在 main 或 router)

以下屬於此狀態

1. 全域 store 改變另一個 store (同步或非同步)，這裡也可以直接使用 `derived` 方法，並放置在 `store`2
2. 複雜邏輯，例如使用 rxjs 非同步送出更多的 `action`
3. 複雜邏輯，有限狀態機，例如使用 `XState`

## 定位

Store -> Store

> 常用 ⭐⭐⭐
