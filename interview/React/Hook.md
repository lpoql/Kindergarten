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

### useCallback 与 useMemo 的区别？
`useCallback` **用于缓存函数本身**，通常用于跳过组件的重新渲染、从缓存回调函数更新状态、防止`useEffect`过于频繁触发、优化自定义 hook。<br>

`useMemo` _**_用于缓存计算结果_**_，通常用于组件的重新渲染、记忆一个函数、记忆一个 hook 的依赖。<br>

通常父组件重新渲染时，会递归的计算子组件并重新渲染，当我们确定重新渲染某个子组件的代价过高，可以使用它们优化子组件，即缓存您的子组件，跳过不必要的重新渲染。

总结，它们不同之处在于缓存什么，useCallback 缓存的是函数本身，不会调用函数本身，而 useMemo 缓存的是函数调用的结果。
```tsx
// Simplified implementation (inside React)
function useCallback(fn, dependencies) {
  return useMemo(() => fn, dependencies);
}
```

### 
