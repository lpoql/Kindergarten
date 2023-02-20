### localStorage、sessionStorage、HTTP Cookie 区别？
参考 MDN Web API: [cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)、[sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)、[localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
>localStorage、sessionStorage 和 cookie 都受“同源”规则的约束，这意味着浏览器应该阻止访问除设置信息开始的域之外的数据。
> 
>`Window.localStorage` 属性允许你访问一个 `Document` 源（origin）的 `Storage` 对象，存储的数据保存在浏览器会话中，数据可以长期保留，存储数据以字符串键值对存储，这意味着数值类型会自动转化为字符串类型。
> 
>`Window.sessionStorage` 属性允许你访问一个当前源的 `Session` 的 Storage 对象，它与 localStorage 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。
>
> `HTTP Cookie` 是服务器发送到浏览器并保存在本地的一块数据，浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。
> 通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。

localStorage:
- 持久存储
- 大小 5MB
- 键值对存取值
- 浏览器保存
***
sessionStorage:
- 页面会话结束时清除存储
- 大小 5MB
- 键值对存取值
- 浏览器保存
***
HTTP Cookie:
- 分会话期 Cookie 和持久性 Cookie (Expires 字段指定)
- 大小 4kb
- 每次 HTTP 请求中都会携带

