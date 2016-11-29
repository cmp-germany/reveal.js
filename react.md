# React.js

![React Logo](gfx/react-logo.png)

> "A Javascript Library for building user interfaces"


## What is React.js?

- JS Library: "Build User Interfaces"<!-- .element: class="fragment" -->
- Not a Framework<!-- .element: class="fragment" -->
- The "V" in MVC<!-- .element: class="fragment" -->



## Core Concepts


### Virtual DOM

![](gfx/reactjs-virtual-dom-real-dom.jpg)


### JSX

```html
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

compiles into

```javascript
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```


### Components


![](gfx/Bildschirmfoto 2016-11-29 um 10.58.24.png)


```html
<WallWidget
  title="Nachrichten"
  symbol="mail_outline"
  contentScrollable={true}
  contentFull={true}
>
  <Conversations {...this.props} />
</WallWidget>
```



## How Do I write react Code?

Go to [CodePen](http://codepen.io/k-wittmann/pen/yVzyGv)

01. Introduction to JSX
02. Introduction to Own Components
03. Introduction to Props
04. Props Objects
05. Introduction to Children
06. Array as Children



## How to get Started


### The Easy Way:
Include via `<script />` Tag

```html
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
```


```html
<div id="root"></div>

<script type="text/babel" charset="utf-8">
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
</script>
```

> <!-- .element: class="fragment" -->
> # Hello world!

<!-- -->

> To be continued...
