---
title: "加快git clone 或者push 的方法"
date: "2019-07-08"
image: "./img-three.jpg"
coverText: '加快git clone 几十倍速度的小方法 '
---

# 加快git clone 几十倍速度的小方法 （30KB vs 2M）
git clone（有些地区较快，有些地区较慢）；但总体来说,基本都在10KiB/s-40KiB/s之间。
作为linux运维人员来讲，经常需要在服务器上git
clone；分享给大家个加速小办法，亲测有效！

设置
查询域名 global-ssl.fastly.Net github.com 公网地址；

windos电脑上用ping或nslookup命令


```
windows修改host文件： C:\Windows\System32\drivers\etc\hosts
linux 修改host文件： /etc/hosts

151.101.72.249 github.global.ssl.fastly.net
192.30.253.112 github.com
```

