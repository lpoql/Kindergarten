### 在 React DOM 中使用过 key 属性吗？有什么好处？
React 中根据数组渲染列表的时候，会给每一个 DOM 元素绑定一个唯一的 key 值，目的是在 DOM 元素进行一些删除、新增操作时标识已改变的元素，避免重复渲染
```tsx
// 避免使用 key 属性作为 props 传参 
let obj = { key: "bar" }

// 1. Key Before Spread
<div key="foo" {...obj} /> // key = "bar"

// 2. Key After Spread
<div {...obj} key="foo" /> //key = "foo"
```
扩展：[Key and Spread ](https://github.com/facebook/react/issues/20031#issuecomment-710346866)
