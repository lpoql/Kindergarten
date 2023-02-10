## 关于 React Refs

在典型的 React 数据流中，父组件通过 props 将数据传入子组件，需要修改子组件，父组件则需要重新通过 props 重新渲染子组件。<br>
通常情况下，React 通过 state 更新数据重新渲染组件来更新屏幕上的数据，而 Refs 允许我们直接访问 DOM 元素或者 React
组件实例。<br>

一个简单的例子，页面打开我们需要一个文本框自动聚焦，由于 React 没有提供一种简单的方式去实现，所以我们可以在组件首次渲染的时候，通过
Refs 直接获取到 DOM 元素通过事件 focus 实现。<br>

** 避免将 refs 用于任何可以声明式完成的事情。

### 创建 React refs
过去使用类组件时，我们使用 createRef() 来创建 refs，然而现在 React 推崇函数式组件，下面一些练习也将使用 hook 完成，函数式组件中，我们使用 uesRef(null) 来创建 refs。

```tsx
import React, {useState} from "react";

const InputModal = ({initialValue, onSubmit, onClose}: Record<string, any>) => {
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null); // 创建 refs

    useEffect(() => {
        inputRef.current.focus(); // 初次渲染自动聚焦
    }, [])

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="modal--overlay">
            <div className="modal">
                <h1>Insert a new value</h1>
                <form action="?" onSubmit={() => {
                    e.preventDefault();
                    onSubmit(value); // 回传值
                    onClose();
                }}>
                    {/* 使用 refs */}
                    <input ref={inputRef} type="text" onChange={onChange} value={value}/>
                    <button>Save new value</button>
                </form>
            </div>
        </div>
    );
};

export default InputModal;
```
### 利用 refs 触发命令式动画
```tsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const InputModal = ({ initialValue, onClose, onSubmit }) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef(null);
  const animationRef = useRef(null); // 用于触发模块框打开时动画
  const animation2Ref = useRef(null); // 用于触发模块框关闭时动画
  
  const onComplete = () => {
    inputRef.current.focus();
  };
  
  const timeline = gsap.timeline({ paused: true, onComplete });
  
  useEffect(() => {
    timeline
      .from(animationRef.current, {
        duration: 0.25,
        autoAlpha: 0,
      })
      .from(animation2Ref.current, {
        duration: 0.25,
        autoAlpha: 0,
        y: 25,
      });
    timeline.play();
    document.body.addEventListener("click", onClickOutside);
    return () => {
      timeline.kill();
      document.removeEventListener("click", onClickOutside);
    };
  }, []);
  
  const onClickOutside = (e) => {
    const element = e.target;
    if (modalRef.current && !modalRef.current.contains(element)) {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    }
  };
  
  const onChange = (e) => {
    setValue(e.target.value);
  };
  
  const onSub = (e) => {
    e.preventDefault();
    onSubmit(value);
    onClose();
  };
  
  return (
    <div className="modal--overlay" ref={animationRef}>
      <div className="modal" ref={animation2Ref}>
        <h1>Insert a new value</h1>
        <form action="?" onSubmit={onSub}>
          <input ref={inputRef} type="text" onChange={onChange} value={value} />
          <button>Save new value</button>
        </form>
      </div>
    </div>
  );
};
export default InputModal;
```

### 使用 forwardRef
用于父组件将获取到的 ref 进一步传递给子组件

```tsx
import React from 'react'

const LabelledInput = (props, ref) => {
  const { id, label, value, onChange } = props

  return (
    <div class="labelled--input">
      <label for={id}>{label}</label>
      <input id={id} onChange={onChange} value={value} ref={ref}/>
    </div>
  )
}

export default React.forwardRef(LabelledInput)
```
[代码示例来源](https://blog.logrocket.com/complete-guide-react-refs/)
