### 什么是 React ？

前端 JavaScript 工具库，基于 UI 组件搭建 Web 界面。
> React 是 Facebook 于 2011 年开发的声明式、高效、灵活的开源前端 JavaScript 库。它遵循基于组件的方法来构建可重用的 UI
> 组件，特别是对于单页应用程序。它用于开发 Web 和移动应用程序的交互式视图层。它是由 Facebook 的软件工程师 Jordan Walke
> 创建的。它最初于 2011 年部署在 Facebook 的 News Feed 部分，后来被用于 WhatsApp 和 Instagram 等产品中。

### React 特点

- 声明式组件
- 灵活高效
- 基于 UI 组件，可复用

> 声明式：函数式/类组件<br>
> 灵活高效：支持 JSX 语法；通过生成虚拟 DOM ，避免直接操作真实 DOM 减少开销；单项数据流；

### 什么是 JSX ?

JavaScript 语法扩展，外观与 HTML 类似，最终被 Bable (JavaScript 编译器) 编译成 HTML 才能被浏览器理解

#### JSX 与 HTMl ？

JSX 语法不是 HTML 语法，JSX 语法通过 Bable 转义成 HTMl

#### React 使用 JSX 语法，React 能直接渲染 HTML 吗？

React 可以通过 `ReactDOM.render(<p>Hello</p>, document.getElementById('root'));` 形式呈现 HTML

### 类组件 与 函数式组件？

函数式组件捕获了渲染所需要的值

类组件：

- React 通过继承 `React.Component` 声明组件，通过 `render` 函数返回 React 元素
- 具有生命周期,内部有状态 `status`

函数式组件：

- 函数式声明，组件内部数据可通过函数传参形式注入 `props`，返回 React 元素，本质上就是 JavaScript 函数
- 无生命周期，无状态，用完

  [参考](https://github.com/jappp/Blog/issues/12)
  [官方](https://reactjs.org/docs/components-and-props.html)<br>

#### 何时使用？

依情况而定

### 什么是 Pure Components (纯函数)

[PureComponent](https://beta.reactjs.org/reference/react/PureComponent)<br>
[保持组件纯净](https://beta.reactjs.org/learn/keeping-components-pure)<br>
纯组件不依赖或修改其范围之外的变量状态，而是依赖当前函数的作用域。<br>在 JavaScript
中对于纯函数的定义为，纯组件对于特定的输入参数，总是油特定的输出，输出完全依赖于输入参数，而不依赖其他外部变量。

React 中 Pure Component 支持所有 Component API，继承 Pure Component 相当于定义一个自定义 `shouldComponentUpdate` 方法，浅层比较
props 和 state

使用场景：
React 通常会在父组件重新渲染时重新渲染组件，类组件可以通过扩展纯函数组件这种行为，作为一种优化，只要 `props` 和 `state`
与旧的相同，React 就不会在其父组件重新渲染时重新渲染。

```jsx
class Greeting extends PureComponent {
    render() {
        return <></>
    }
}
```

### React 状态是什么？

状态：组件的内存

> 类组件中：内置的 state 对象，用于存储组件属性值，当 state 内部值发生变化时组件重新渲染，通过 this.state 访问，值的更新通过
> this.setState() 设置
>
> 函数式组件：使用 useState [Hook]() 添加状态变量

### React 中 Props 是什么？

> React 组件中 props (只读属性) 是一个对象，用于组件内部接收参数。工作原理类似于 HTML 标签属性，在类组件中通过 `this.props`
> 访问，函数式组件中类似于函数传参。

示例：

```tsx
function TablerIcon({size, color}: { size: number, color: string }) {
    return <div style={{color: color}}>{size}</div>
}

<TablerIcon size={18} color={'red'}/>
```

### React 中 State 和 Props 区别？

> state 和 props 都属于 JavaScript 对象，不同的是 props 是传递给组件的，state 是组件内部自己管理的（类似于函数内部生命的变量），props
> 只读，state 可更新

### React 中的 DOM 事件与 纯 HTML 事件区别？
[处理事件](https://reactjs.org/docs/handling-events.html)
- 写法
> React 中 DOM 事件是以驼峰命名，纯 HTML 是小写
- 阻止事件默认行为
> React 中通过显示调用`preventDefault`，纯 HTML 通过 `return false` 阻止
- 事件的绑定
> React 中绑定事件处理函数，纯 HTML 中字符串形形式

### 那 React 中的 DOM 事件对象 (event) 和 HTML 事件对象是否等价？
[合成事件](https://reactjs.org/docs/events.html)
不一致，React 官方遵循 W3C 规范定义了合成事件，事件写法上类似 `onKeyDown`，可参考官网查询

