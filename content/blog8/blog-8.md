---
title: "关于css中display的一些小知识"
date: "2019-09-10"
image: "./img-eight.png"
coverText: "关于css中的display的一些小知识"
---

## css
因为之前没有系统的学习过css.就只知道这个标签能这么用，那个标签能这么用.
总感觉还是停留在表面.想要稍微深入一点学习这个css以及特别重要的布局.所以写这个文章来稍微记录一下.（悄悄的.我是上班空了的时候才敢看一看哈哈.）

直接开始哈

###  display : none
将元素设置为none的时候既不会占据空间，也无法显示，相当于该元素不存在.

---


### display : inline
它主要用来设置行内元素属性，设置了该属性之后设置高度、宽度都无效，同时text-align属性设置也无效，但是设置了line-height会让inline元素居中

目前很多原生的元素都是inline的，如span，a，label，input，img，strong和em
就是属于电影的行内元素

---

### display ：block
设置元素为块状元素，如果不指定宽高，默认会继承父元素的宽度，并且独占一行.即使宽度有剩余也会独占一行，高度一般以子元素撑开的高度为准，当然也可以自己设置宽度和高度

小技巧：有时需要设计一个div宽高都是整个屏幕，整个时候宽度很好设置，可是高度一般很难设置，因为页面一般都是可以滚动的，所以高度一般可变

```js
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div class="main">
  </div>
</body>
</html>
html{
  height: 100%;
}
body{
  height: 100%;
  padding: 0;
  margin:0;
}
.main{
  background: red;
  width: 100%;
  height: 100%;
}
```

> div继承的是夫元素body的高度，body是继承html的高度，html是继承的浏览器屏幕的高度

### display:inline-block

inline-block既具有block的宽高特性又具有inline的同行元素特性

### display:flex
注意设为flex布局以后，子元素的float，clear和vertical-align属性将失效。
主要属性有两大类：容器属性和项目的属性

容器属性：
- flex-direction: 属性决定主轴的方向（即项目的排列方向）。
- flex-wrap: 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
- flex-flow: 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
- justify-content: 属性定义了项目在主轴上的对齐方式。
- align-items: 属性定义项目在交叉轴上如何对齐。
- align-content: 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
- 
项目属性：
- order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- flex-shrink: 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
- flex: 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
- align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

[阮一峰老师的flex布局讲的很清晰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

我觉得比较重要的就是这几个吧.大家有指正错误的请在github下留言谢谢啦.


