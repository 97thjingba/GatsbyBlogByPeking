---
title: "添加eslint"
date: "2019-11-01"
image: "./img-11.jpg"
coverText: "添加eslint规范前端代码"
---

## 添加Eslint

最近跟着harry一起做react-native 项目,项目是大概已经做了有一年多了.然后前几天添加了eslint.我感觉挺好用的,对代码规范十分有用.于是我消防了一下加在了admin代码里.

**大概直接说一下如何快速安装eslint配置和添加提交代码之前的eslint检测**

#### 1:安装所需包

```
npm install --save-dev husky lint-staged eslint
```

#### 2:配置eslint规则


```shell
./node_modules/.bin/eslint --init
```

然后自己在.eslintrc.json 添加自己的rules(针对项目发挥吧)

#### 3:husky和lint-staged的配置


```
"husky":{
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "src/**": [
        "prettier --config .prettierrc --write",
        "eslint --fix",
        "git add"
    ]
}
```

以上配置差不多就可以了. 代码风格看自己吧


