//cnpm i express --save
let express = require("express");

//创建一个服务器对象
let app = express()   //省掉了new关键字
let fs = require("fs");

//接收到页面的所有请求，进行拦截，放在所有路由的最上方，用这个方法判断用户是否登录

//内置中间件exprss.static("虚拟目录默认是/可以省掉","静态资源目录")

app.use("/", express.static("public"))
//http://localhost:3000/upload/images/1.jpg
app.use("/upload", express.static("public"))


app.use("/upload", express.static("upload"))


app.listen(3000, () => {
    console.log("3000runing");
})