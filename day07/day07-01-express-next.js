//cnpm i express --save
let express = require("express");

//创建一个服务器对象
let app = express()   //省掉了new关键字

app.get("/", (req, res) => {
    res.send("ok")
})
app.get("/list", (req, res, next) => {
    req.username = "llr"
    next()  //放行
})

app.get("/list", (req, res) => {
    res.send(req.username)
})

app.listen(3000, () => {
    console.log("3000runing");
})