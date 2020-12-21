安装命令：npm install cypress --save-dev
运行报错：cypress\node_modules\.bin目录下的cypress文件删除掉，新建一个同名文件夹cypress即可

![image-20201221142615009](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20201221142615009.png)

##### 1、启动可视化页面：

> ​	先移动到cypress同目录 node_modules\.bin文件夹 打开cmd面板，进入该目录启动程序
> ​	cmd进入目录：cypress\node_modules\.bin
> ​	启动命令：cypress open

![image-20201221143646177](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20201221143646177.png)

2、cypress.json文件中可配置baseUrl，package.json文件中可维护脚本		

> "cypress": "cypress run",

![image-20201221144006464](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20201221144006464.png)

3、以Mochawesome测试报告方式运行

> ​	npm install --save-dev mocha
> ​	npm install --save-dev mochawesome
> ​	npm run cypress --reporter mochawesome



4、npm run cypress 时报错，提示：cypress非可执行程序，也非内部程序

- ​	进入cypress\node_modules\.bin目录，新建文件 cypress.cmd

  > @ECHO off
  > SETLOCAL
  > CALL :find_dp0
  >
  > IF EXIST "%dp0%\node.exe" (
  >   SET "_prog=%dp0%\node.exe"
  > ) ELSE (
  >   SET "_prog=node"
  >   SET PATHEXT=%PATHEXT:;.JS;=;%
  > )
  >
  > "%_prog%"  "%dp0%\..\cypress\bin\cypress" %*
  > ENDLOCAL
  > EXIT /b %errorlevel%
  > :find_dp0
  > SET dp0=%~dp0
  > EXIT /b
  >
  > 

![image-20201221153923706](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20201221153923706.png)

