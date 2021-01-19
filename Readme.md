安装命令：npm install cypress --save-dev


##### 1、启动可视化页面：

> ​	cypress根目录的package.json中维护脚本启动命令，可自定义命令关键词，以debug为例。cmd命令行输入启动命令  npm run debug  

![image-20210119153558058](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20210119153558058.png)

![image-20210119153803177](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20210119153803177.png)

2、cypress.json文件中可配置baseUrl，package.json文件中可维护脚本		

> "baseUrl": "http://ap-catering-v2.td.com",
>
> npm run test

![image-20210119153853279](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20210119153853279.png)

![image-20210119154257568](C:\Users\hzy\AppData\Roaming\Typora\typora-user-images\image-20210119154257568.png)

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

