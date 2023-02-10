### 什么是 Hook ？

Hook 意为 “钩子” ，意在组件尽量写成纯函数，如果需要状态和其他 React 功能，就用 “钩子” 将其钩进来。本质上是封装的 React
功能函数，需要时引入。<br>`useState()` 函数就是典型的 state 状态存储函数，使用方式：<br>

```typescript
const [state, setState] = useState(0) // 初始状态值为0

const handle = () => {
    setState(1) // 值的更新
}
```

> __*__ 注意：钩子函数是以 use 开头，只能用于组件的顶层或自定义钩子。您不能在条件、循环或其他嵌套函数中调用 Hooks。

