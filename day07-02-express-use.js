//cnpm i express --save
let express = require("express");

//创建一个服务器对象
let app = express()   //省掉了new关键字

//接收到页面的所有请求，进行拦截，放在所有路由的最上方，用这个方法判断用户是否登录
//应用级中间件
app.use(function (req, res, next) {
    //用这个方法判断用户是否登录
    let username = "llr"
    if (username == "llr") {
        next()
    } else {
        console.log("不好意思，我是挡道的");
    }
})

app.get("/list", (req, res) => {
    res.send("ok")
})



app.listen(3000, () => {
    console.log("3000runing");
})