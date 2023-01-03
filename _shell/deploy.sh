#!/bin/bash

## 加载变量
source "./_shell/init.sh"
#############

npm install &&
  npm run build &&
  # npm run git &&
  # node ${path}"/_shell/sftp.mjs"
  echo "清空 ProdProject 目录"
rm -rf ${deployPath}

echo "移动文件到 ProdProject 目录"

cp -r ${outPutPath}"/." ${deployPath}"/"

exit
