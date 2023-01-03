#!/bin/bash
#############
## 加载变量
source "./_shell/init.sh"
#############

hexo clean &&
  hexo generate &&
  cp -r source/img/* dist/img/
