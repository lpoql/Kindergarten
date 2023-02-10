### 什么是虚拟 DOM ？虚拟 DOM 如何工作？
参考：
[wiki](https://en.wikipedia.org/wiki/Virtual_DOM) |
[代码学院](https://www.codecademy.com/article/react-virtual-dom)<br>

虚拟 DOM 是在声明式 Web 框架（React/Vue.js）中使用的`文档对象模型（DOM）`的轻量级 JavaScript 表示。<br>

在 React 中每一个 DOM 对象都有一个对应的虚拟 DOM 对象，更新虚拟 DOM 比更新真实 DOM （通过 JavaScript 操作）相对更快，因为操作虚拟 DOM 屏幕上不会绘制任何内容（不会触发重绘重排）。<br>

当你渲染一个 JSX 元素，每个虚拟 DOM 都会更新。当虚拟 DOM 更新时，React 会将当前虚拟 DOM 与更新前虚拟 DOM 的快照进行比较，React 能准确的找出哪些 DOM 对象发生了变化，该过程被称为 “差异化”。<br>

在找到变化的虚拟 DOM 之后，再将对应的真实 DOM 更新，其余部分保持不变。

总结：
- 更新整个虚拟 DOM
- 将虚拟 DOM 和快照前对比，找出变化的虚拟 DOM 对象
- 更改变化的虚拟 DOM 对应的真实 DOM
- 渲染界面

### React diff 原理了解多少？
[参考](https://zhuanlan.zhihu.com/p/20346379)
