# vanilla-pop

> Use tippy.js

从这个案例可以看到，一个 Vanilla Pop组件，本身可以不需要包含 giv，也可以被 giv 使用。只需要此组件满足3个规则：

- 1. 组件是一个函数，返回值是一个 HTMLElement 类型
- 2. 组件的参数是一个对象
- 3. 若 JSX 传递了 children，在组件第一个参数中会包含 children 字段，值是一个 HTMLElement 数组

```jsx
import Pop from 'vanilla-pop';

const App = ()=>{
  return <Pop>
    <div>label</div>
    <div>pop tip</div>
  </Pop>
}
```