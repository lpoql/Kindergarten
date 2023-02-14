### TypeScript 的主要特点？

TypeScript 是 JavaScript 的类型超集，这意味着任何 JavaScript 代码都不会被视为错误，同时 TypeScript
也被称为类型检查器，即在代码未运行之前（编译时）就对其进行类型检查，这被称为`静态类型检查`。<br>

- 编译型语言
- TypeScript 增加了静态类型、类、模块、接口和类型注解。
- TypeScript 的静态类型增加了代码的可读性及结构化
- 易于调试：编写代码过程中，代码带来的编译错误会直接通过编译器告知

### JavaScript 与 TypeScript 区别？

- JavaScript 解释型语言；TypeScript 编译型语言
- JavaScript 没有静态类型；TypeScript 支持可选静态类型
- JavaScript 不支持接口；TypeScript 支持定义接口
- JavaScript 不支持泛型；TypeScript 支持泛型
- JavaScript 引入了模块化概念；TypeScript 支持模块化编程，支持导出变量、接口等

### 编译型语言和脚本语言的差别？

- 脚本语言对类型的定义比较宽泛，在运行时进行动态类型检查；编译型语言通常是编译时就进行静态类型检查
- 脚本语言是解释型的；编译型语言是编译型
- 脚本语言的运行依赖于平台；编译型语言跨平台，因为他们能自己执行
    - JavaScript 依赖于浏览器运行，而 TypeScript 可在任何操作系统上运行
- 编译型语言运行时比脚本语言快，因为不用像脚本型语言那样实时编译
- 脚本语言运行时由其平台逐行解释；编译型语言在编译前

### TypeScript 有哪些常见的类型？

在包含 JavaScript 常见的类型之外，TypeScript 还提供了 `any`、`never`、`unknown` 等，以及通过 `type`、`interface`、`泛型`
等来定义高级类型，
除此之外[官方](https://www.typescriptlang.org/docs/handbook/intro.html)还提供了关于类型的高级用法
> 基础类型：string、number、null、undefined、boolean <br>
> 引用类型：Array、Object、Function <br>
> 不常用类型：Symbol、bigint

### TypeScript 中 Interface 是什么？

Interface (接口)
，接口是一种结构，它定义了类要遵循的语法，也就是实现一个接口的类必须要实现接口所有的成员。我们不能实例化接口，但是可以被实现它的类对象引用。<br>
TypeScript 使用`接口`进行`类型检查`，接口只包含`方法`和`字段的声明`

```typescript
// interface 是关键字 
// example 是接口名
// 内部属性方法是接口需实现的属性方法
interface example {
    fn(s: string): void

    key: string
}
```

### interface 和 类型别名的区别？
类型别名使用 type 关键字定义，所谓别名就是给类型定义个新名字, `type hello = string` 表示定义一个名叫 hello 的 `string` 类型。<br>

接口可以通过 `extends` 字段继承其他接口上的属性方法，type 类型是在定义时就已经限定，无法后续扩展属性方法。

### 强类型、弱类型、静态类型、动态类型区别？

- 强类型/弱类型：语言是否尝试进行类型的隐式转换
- 静态类型：编译过程中检查值的类型（代码执行前）
- 动态类型：执行过程中检查值的类型

> 举例：JavaScript 会在运行中根据值来推断类型，而且我们熟知 JavaScript
> 中是可以进行字符串及数字的基本运算操作的 `例如："3" + 1`，故 JavaScript 是动态弱类型。<br>
> TypeScript 在声明前就已经指明了类型，但可以通过类型断言，且在编译器上可以实时看到报错信息，故 TypeScript 是静态弱类型。

```typescript
const num: number = 19
const str = (num as unknown as string).split('')
```
参考：[Static/Dynamic vs Strong/Weak](https://stackoverflow.com/questions/2351190/static-dynamic-vs-strong-weak)
