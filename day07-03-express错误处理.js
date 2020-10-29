//cnpm i express --save
let express = require("express");

//创建一个服务器对象
let app = express()   //省掉了new关键字
let fs = require("fs");

//接收到页面的所有请求，进行拦截，放在所有路由的最上方，用这个方法判断用户是否登录


app.get("/list", (req, res, next) => {
    fs.readFile("./day07-02-express-use1.js", (err, data) => {
        if (err) {
            next(err)
        } else {
            res.send(data)
        }
    })
})


//错误处理中间件，放在所有路由的最下方法
app.use((err, req, res, next) => {
    res.status(500).send(err)
})


app.listen(3000, () => {
    console.log("3000runing");
})