---
title: 打造最棒win10开发环境
id: best_dev_win10
date: 2020-03-29 22:56:53
top_img: http://file.mo7.cc/blog/win10/win10codebg.jpg
cover: http://file.mo7.cc/blog/win10/win10bg.jpg
categories:
  - win10
tags:
  - win10
  - 开发环境
  - 系统安装
---

# 打造最棒 win10 开发环境

作为一只 Coder ,之前使用过 OSX ，也折腾过各种 Linux 发行版，如：[Ubuntu](https://ubuntu.com/)、[manjaro](https://manjaro.org/)、[debian](https://www.debian.org/index.zh-cn.html)、[deepin](https://www.deepin.org/)、甚至还有 [Arch](https://www.archlinux.org/) ；前不久还去尝试了国产之光 [UOS](https://www.chinauos.com)

但折腾到最后还是回归了 [Windows10](https://www.microsoft.com/zh-cn/software-download/windows10)。

先贴上大佬的文章 <http://www.yinwang.org/blog-cn/2013/03/07/linux-windows-mac>

折腾了这么久的系统最后才明白什么叫做大道至简。自从微软收购了 Github，Github 又收购了 npm，TypeScript 又如此优秀，我就明白了一件事情，想摆脱微软那是不可能的。所以我懒得折腾和站队了，快速产出用起来省心才是最重要的

> 生活中有那么多的美好，干嘛非得折腾系统呢

## 下载并安装 Win10

打开网站 [下载 Windows10](https://www.microsoft.com/zh-cn/software-download/windows10)，点击`立即下载工具`，然后插上一个大于 10G 的空 U 盘，然后按照步骤下一步就 OK 了。

然后重启计算机，选择 U 盘启动。

这里需要注意的就是在安装的时候不要连接网络并采用微软的账号登录，而要采用本地帐号登录，因为你的账户名其实就是你的个人文件夹的名字，类似于：

`C:\Users\mo7\scoop\apps\git\current\bin\bash.exe`

这里的 `\mo7\` 就是你当前的本地账户名。

这样如果你有多台计算机的时候，本地用户目录可以完全保持一致了。

新的系统建议进行数字激活。

数字权利激活的意思就是，跟硬件绑定，这台电脑只要硬件不换，那么重装多少次都是正版，而且是永久，只要联网，自动激活。

PS:数字激活之后建议重置一下系统，这样只要硬件不换，基本上系统就始终是激活状态。

> 建议大家购买正版 Win10

## 预览版申请

为何需要预览版？

因为新嘛，比市场上一般的 win10 版本要早半年左右，很多微软大法的新想法和新的功能就可以提前享用了，比如我的 win10 版本是 2004：

![win10version.png](http://file.mo7.cc/blog/win10/win10version.png)

而 WSL2 就需要 2004 才可以使用

预览版申请非常简单，`快捷键 Win + I` 打开 `Windows 设置`：

`设置 -> 更新和安全 -> Windows 预览体验计划`

然后按照步骤一步步操作就可以了，我记得要回答问题，好几十道呢....

预览版的资格是跟微软账户绑定的，这个属于一劳永逸的事情。

> 我用了半年多的预览版(慢)，发现其非常稳定，目前没出现过什么大的问题

---

## 一些系统的基础设置

- `设置 -> 更新和安全 -> Windows 更新` 把系统更到最新并按照自己的习惯去设置更新频率和时间
- `设置 -> 更新和安全 -> 开发者选项` 按自己情况去勾选
- `控制面板 -> 系统和安全 -> 系统` 更改计算机名称和描述
- `快捷键 Win + S` 打开搜索，输入`启用或` 打开`启用或关闭windos功能`

  > 或者 `控制面板 -> 程序 -> 程序和功能` 左上角 `启用或关闭windos功能`

![windows_set.jpg](http://file.mo7.cc/blog/win10/windows_set.jpg)

勾选后重启，现在我们拥有一个干净且纯粹的 Win10 系统了

---

## OneDrive

非常好用哈，配合上 win10 简直爽翻天啊，而且价格低廉（`一年59块，5TB不限速`），和 Win10 系统深度绑定，支持移动端，并且还外送一个正版的 [Office365](https://www.office.com/)

> 详情请见本站文章
> [OneDrive 的使用小窍门](/win10/onedrive_install/)

---

## v2rayN

我见过的最好用的网络代理客户端，

其组成分为两个部分 [客户端 v2rayN](https://github.com/2dust/v2rayN/releases/tag/3.8) 和 [核心 v2ray-core](https://github.com/v2ray/v2ray-core/releases/tag/v4.22.1) 。

> 详情请见本站文章
> [v2rayN 客户端的安装和使用](/win10/v2ray_install/)

---

## WSL2

当解决了上网问题之后，首先第一个要解决的就是软件开发的核心 Linux；
安装也非常简单，去系统自带的 `Microsoft Store` 找自己喜欢的发行版版本下载就可以了；
然后升级到 `WSL2` ，升级文档请见 [WSL2 的安装说明](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-install)

会用到如下命令:

```bash

# 验证查看WLS安装情况和版本
wsl -l -v

# 升级到 WSL2
wsl --set-version <Distro> 2

#设置 WSL2 为默认
wsl --set-default-version 2

```

> 详情请见本站文章
> [WSL2 的安装与使用](/win10/wsl_install/)

---

## Scoop

类似于 macOS 的 `brew` 和 Linux 的 `apt` 。这个是 windows 下的软件包管理器，虽然也有其它的如 [Chocolatey](https://chocolatey.org/)，但是综合比较起来，还是 [Scoop](https://scoop.sh/) 比较好用

安装步骤也很简单，只要打开`PowerShell`依次执行如下命令（虽然可以不用，但是建议打开管理员权限）

> PS 首先要确保`https://get.scoop.sh`可以正常访问，如果久久无法打开，请打开 `v2rayN` 并切换到`全局模式`

```bash
# 允许当前用户运行源自远程源的脚本。
Set-ExecutionPolicy RemoteSigned -scope CurrentUser

# 下载并运行官方的安装脚本
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

# 设置代理（10809是v2rayN的默认端口，当然你也可以不设置这一步）
scoop config proxy 127.0.0.1:10809

# 开启 aria2 下载加速
scoop install aria2

# 添加官方维护的 bucket
scoop bucket add extras

#检查潜在的问题..执行下看看使用scoop在该系统下会有什么问题（然后根据报错信息逐步解决就好了）
scoop checkup

# 在安装软件之前建议先进行搜索，查看版本或者信息（如 firefox）
scoop checkup firefox

# 对我个人来说必装的软件有
scoop install git
scoop install github
scoop install nodejs-lts
scoop install go
scoop install python

```

> 详情请见本站文章
> [Scoop 的安装与使用](/win10/scoop_install/)

---

## Windows Terminal

超级好用啊，用了一段时间后我把 [Cmder](https://cmder.net/) 都卸载了，虽然有一些功能不如 Cmder 顺手，但也基本上都可以克服

安装方法和 `WSL` 一样，去 `Microsoft Store` 搜索 `Windows Terminal` 下载就行了，虽然是 `Preview` 版本，但是目前使用没出现什么问题

也可以通过 Scoop 安装

```bash

scoop install windows-terminal

```

> 不嫌麻烦的也可以去 github 找源码自己编译

> 详情请见本站文章
> [Windows Terminal 的安装与使用](/win10/winterminal_install/)

---

## Git 的配置

目前最主流的文件版本控制系统，之前有使用过 SVN，但是 git 用起来更爽一点

<https://git-scm.com/>

推荐通过 Scoop 安装

```bash

scoop install git

```

> 详情请见本站文章
> [Git 的安装与配置](/git/git_install/)

---

## VSCode 的配置

目前最强大的编辑器，界面由 javascript 技术开发，所以跨平台体验高度一致。自由的社区和丰富的插件生态让 Vscode 支持大多数的开发和编辑需求。

<https://code.visualstudio.com/>

也可以通过 Scoop 安装

```bash

scoop install vscode

```

> 详情请见本站文章
> [VSCode 的安装与使用](/ide/vscode_install/)

---

## Golang 开发环境搭建

新一代编程语言，语法简洁，强类型且速度快，设计上虽有不足，但前途无量
语言官网被河蟹，所以一般是访问中文社区
<https://studygolang.com/>

推荐通过 Scoop 安装

```bash

scoop install go

```

> 详情请见本站文章
> [Golang 开发环境配置](/golang/golang_install/)

---

## Nodejs 开发环境搭建

前端必备利器，之前一直宣称要跟服务端抢饭碗，最后发现，这玩意儿还是当个辅助开发的工具比较合适

推荐通过 Scoop 安装

```bash

scoop install nodejs-lts

```

> 详情请见本站文章
> [Nodejs 开发环境配置](/nodejs/nodejs_install/)

---

## Python 开发环境搭建

老实说，不是很喜欢 Python 的风格，但有的时候做个东西就是快，库丰富生态成熟没办法

<https://www.python.org/>

推荐通过 Scoop 安装

```bash

scoop install python

```

> 详情请见本站文章
> [Python 开发环境配置](/python/python_install/)

---

## 一些其他的好用的软件推荐

### Edge

基于 Chromium 内核开发的新一代 Edge，比 chrome 体验更好，更强大。

<https://www.microsoft.com/zh-cn/edge>

<https://www.microsoftedgeinsider.com/zh-cn/download>

### 网易有道词典

一般用来查一些英文单词的发音和翻译。其他的杂七杂八的功能全部关闭，只保留一个截屏翻译，这样很多命令行和系统不认识的英文部分都可以方便快捷的翻译和查找了，学习英语的神器。

<http://cidian.youdao.com/multi.html>

### Snipaste

`Microsoft Store` 搜索下载安装，目前 Win10 下用起来最顺手的截图软件。

### Bandizip

目前用过的最好的压缩软件，支持几乎所有格式，并且免费干净

<https://www.bandisoft.com/bandizip/>

也可以通过 Scoop 安装

```bash

scoop install bandizip

```

### FDM

Free Download Manager ，IDM 的免费替代版本，很清爽的下载工具

<https://www.freedownloadmanager.org/zh/>

### 云存储管理客户端 qiniuClient

github 开源的，管理静态资源的客户端，用 web 前端技术开发的，用起来很顺手。

https://github.com/willnewii/qiniuClient

---
