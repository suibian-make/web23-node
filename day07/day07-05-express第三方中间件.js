//cnpm i express --save
let express = require("express");
let md5 = require("md5")

//创建一个服务器对象
let app = express()   //省掉了new关键字

//第三方中间件 都需要下载
// body-parser  接收post发送的文本数据
//cnpm i body-parser -S
let bodyParser = require("body-parser");

//使用
app.use(bodyParser.urlencoded({ extended: false }))

//数据为json格式
app.use(bodyParser.json())

app.post("/login", (req, res) => {

    let userpass = md5(req.body.userpass)
    console.log(userpass);
    let obj = {
        username: req.body.username,
        userpass: userpass
    }
    console.log(obj);
})

app.listen(3000, () => {
    console.log("3000runing");
})