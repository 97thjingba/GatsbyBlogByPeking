---
title: "近期学习的东西"
date: "2019-11-28"
image: "./img-12.jpg"
coverText: "近期感觉学习到的比较实用的东西"
---

# git stash 

我们有时会遇到这样的情况，正在dev分支开发新功能，做到一半时有人过来反馈一个bug，让马上解决，但是新功能做到了一半你又不想提交，这时就可以使用git stash命令先把当前进度保存起来，然后切换到另一个分支去修改bug，修改完提交后，再切回dev分支，使用git stash pop来恢复之前的进度继续开发新功能。下面来看一下git stash命令的常见用法


## git stash
保存当前工作进度，会把暂存区和工作区的改动保存起来。执行完这个命令后，在运行git status命令，就会发现当前是一个干净的工作区，没有任何改动。使用git stash save 'message...'可以添加一些注释

## git stash list
显示保存进度的列表。也就意味着，git stash命令可以多次执行。

## git stash pop [–index] [stash_id]
git stash pop 恢复最新的进度到工作区。git默认会把工作区和暂存区的改动都恢复到工作区。
git stash pop --index 恢复最新的进度到工作区和暂存区。（尝试将原来暂存区的改动还恢复到暂存区）
git stash pop stash@{1}恢复指定的进度到工作区。stash_id是通过git stash list命令得到的
通过git stash pop命令恢复进度后，会删除当前进度。
## git stash apply [–index] [stash_id]
除了不删除恢复的进度之外，其余和git stash pop 命令一样。

## git stash drop [stash_id]
删除一个存储的进度。如果不指定stash_id，则默认删除最新的存储进度

## git stash clear
删除所有存储的进度。

## 重构小技巧
- 函数单一职责
- 通过引入解释性变量或函数，使得表达更清晰
- 更少的嵌套，尽早 return
- 以HashMap取代条件表达式


```js
// bad
let getSpeed = type => {
  switch (type) {
    case SPEED_TYPE.AIR:
    return getAirSpeed()
    case SPEED_TYPE.WATER:
    return getWaterSpeed()
    ...
  }
}

// good
let speedMap = {
  [SPEED_TYPE.AIR]: getAirSpeed,
  [SPEED_TYPE.WATER]: getWaterSpeed
}
let getSpeed = type => speedMap[type] && speedMap[type]()
```



