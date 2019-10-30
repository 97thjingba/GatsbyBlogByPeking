---
title: "关于react-admin"
date: "2019-10-30"
image: "./img-ten.jpg"
coverText: "关于最近学到的东西"
---


# 说说最近学到的东西吧
### react-admin
感觉这就是给后台管理数据的一个福音

优点:数据的请求和渲染封装的十分精简,几乎可以达到在两分钟内正常显示一个api请求下来的数据.举个例子


```javascript
// in app.js
import React from 'react';
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { PostList,PostIcon } from './posts';

render(
    <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} icon={PostIcon}/>
    </Admin>,
    document.getElementById('root')
);
```

```javascript
import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/core/svg-icons/action/book';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
            <EditButton basePath="/posts" />
        </Datagrid>
    </List>
);
```

他所达到的效果是将请求下来的数据的字段用List里面的**source** 来写入

这样就达到了几乎傻瓜似的写入数据,根本不用考虑去如何请求，如何写入.而我使用这个框架一个月来，最深的感触是我感觉这个框架对于Api的定制要求比较高.api的整套定制必须规范而且整齐。我举个例子

- / maps to the **list** component
- /create maps to the **create** component
- /:id maps to the **edit** component
- /:id/show maps to the **show** component

他所提供的固定接口是这样的,当然可以修改，但是这会导致你的restApiProvider显得及其的混乱，所以我建议在使用之前，确保你的api是整套划一的.

现在使用这个在生产上已经部署了后台管理系统.
运行还算不错的。最近的时间我便在重构以及优化。比如其他的api请求我还是打算重新使用mvc模式来自己封装请求的方法.这样对6大设计模式原则加深理解.




