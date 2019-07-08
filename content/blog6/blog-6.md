---
title: "加入Drawer组件"
date: "2019-07-08"
image: "./img-six.jpg"
coverText: '使用react将代码抽象为组件'
---


# 不常见的错误

---
我想将Drawer代码抽象为一个Drawer组件的时候，遇见了以下的这个问题.




```
Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
```

下面我将举例解决这个问题

```
import React, { Component } from 'react';
import styled from 'styled-components';

class Item extends React.Component {
    constructor(props) {
        super(props);     
        this.toggle= this.toggle.bind(this);
        this.state = {
            details: false
        } 
    }  
    toggle(){
        const currentState = this.state.details;
        this.setState({ details: !currentState }); 
    }

    render() {
        return (
            <tr className="Item"> 
                <td>{this.props.config.server}</td>      
                <td>{this.props.config.verbose}</td> 
                <td>{this.props.config.type}</td>
                <td className={this.state.details ? "visible" : "hidden"}>PLACEHOLDER MORE INFO</td>
                {<td><span onClick={this.toggle()}>Details</span></td>}
            </tr>
    )}
}

export default Item;
```
这里是react 陷入了死循环的问题.(在比较低的版本中不会出现这样的问题可能)

在Onclick里直接填入this.toggle()并不是一个函数，而是函数的执行。所以到了这一行会直接执行这个函数。但是函数里面调用了SetState这个方法，状态改变以后会重新渲染Dom，也就是再次调用render方法。所以一直这样下去就陷入了死循环里

# 解决方法

将***函数的执行变成函数的调用***

```
onClick={this.toggle()}
```

变成

```
onClick={()=>{this.toggle()}}
```