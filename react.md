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

Go to [CodePen](http://codepen.io/k-wittmann/pen/ObxwdG/?editors=0010) <!-- .element: target="_blank" -->

01. [Introduction to JSX](https://github.com/cmp-germany/reveal.js/blob/master/react/example01.jsx) <!-- .element: target="_blank" -->
02. [Introduction to Own Components](https://github.com/cmp-germany/reveal.js/blob/master/react/example02.jsx) <!-- .element: target="_blank" -->
03. [Introduction to Props](https://github.com/cmp-germany/reveal.js/blob/master/react/example03.jsx) <!-- .element: target="_blank" -->
04. [Props Objects](https://github.com/cmp-germany/reveal.js/blob/master/react/example04.jsx) <!-- .element: target="_blank" -->
05. [Introduction to Children](https://github.com/cmp-germany/reveal.js/blob/master/react/example05.jsx) <!-- .element: target="_blank" -->
06. [Array as Children](https://github.com/cmp-germany/reveal.js/blob/master/react/example06.jsx) <!-- .element: target="_blank" -->



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

> <!-- .element: class="fragment" data-fragment-index="1" -->
> # Hello world!

- <!-- .element: target="_blank" class="fragment" data-fragment-index="2" --> [HelloWorld HTML](https://github.com/cmp-germany/reveal.js/blob/master/react/helloWorld.html)
- <!-- .element: target="_blank" class="fragment" data-fragment-index="2" --> [HelloWorld JSX](https://github.com/cmp-germany/reveal.js/blob/master/react/helloWorld.jsx)




> To be continued...
