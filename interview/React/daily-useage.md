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


### 在 React 中 refs 有什么作用？forward refs 呢？
[ref 使用](https://github.com/lpoql/Kindergarten/blob/main/interview/React/ref.md)<br>

> React 官方提供能直接访问 DOM 节点或在 render 方法中创建 React 元素的方法
- ref 属性用于类组件时，ref 对象接收该组件已挂载的实例作为其 current 属性
- ref 用于 HTML 元素时，ref 对象接收该 DOM 元素作为其 current 属性
- ref 属性不会用于函数式组件，因为其没有实例

#### refs 使用场景？
- 视图渲染初期动画
- input 框自动聚焦

#### forward refs 使用？
用于父组件将获取到的 ref 进一步传递给子组件
