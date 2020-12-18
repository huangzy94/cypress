安装命令：npm install cypress --save-dev
运行报错：cypress\node_modules\.bin目录下的cypress文件删除掉，新建一个同名文件夹cypress即可

注意：先将cypress文件夹移动到同目录 node_modules\.bin 打开cmd面板，进入该目录启动程序
cmd进入目录：cypress\node_modules\.bin
启动命令：cypress open

cypress.json文件中可配置baseUrl


