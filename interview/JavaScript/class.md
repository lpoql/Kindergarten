**部分摘要，详细见MDN**
### 类的定义
参考：[classes | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
就像定义函数时的`函数表达式`和`函数声明`一样，类语法有两个组成部分：`类表达式`和`类声明`。<br>
函数声明和类声明之间一个重要的区别，函数声明会提升，类声明不会。<br>

```typescript
// 类表达式
let emo = class {
    constructor(props) {
    }
}

// 类声明
class rectangle {
    constructor(props) {
    }
}
```

### 构造函数

constructor方法是一个特殊的方法，这种方法用于创建和初始化一个由class创建的对象。
一个构造函数可以使用 super 关键字来调用一个父类的构造函数。

- 实例属性必须定义在类的方法里
- 静态的或原型的数据属性必须定义在类定义的外面

### 私有字段

- 私有字段仅能在字段声明中预先定义

```typescript
class Rectangle {
    static #y       // 静态私有
    #height = 0;    // 私有
    #width;

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}
```

### super 关键字

参考：[super | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)
用于访问对象字面量或类原型上的属性，或调用父类的构造函数

- 调用父类构造函数
- 调用类静态方法
- 实例字段是在实例上设置的，而不是在构造函数的原型上，所以你不能用 super 来访问父类的实例字段。


