//下载express   cnpm install express --save
let express = require("express");
let ejs = require("ejs");  //cnpm install ejs --save
let mongoose = require("mongoose");
let bodyParser = require('body-parser');
//下载cnpm install body-parser --save 
//body-parser这个模块的作用是，接收表单通过post发送的文本数据  enctype="application/x-www-form-urlencoded"

//引入自定义模块
require("./model/db.js");
let User = require("./model/user")
console.log(User);
// 创建一个服务器对象
let app = new express();  //new关键字可以省掉

//使用body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())  //将表单数据解析成json格式
//配置模板引擎
app.set("view engine", "ejs");
//配置一个模板路径
app.set("views", __dirname + "/views");  //如果ejs模板在views文件夹中这一行可以省掉

//配置静态资源路径
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.redirect("/home")  //重定向--重新跳转到home页面
})
//配置路由
app.get("/home", (req, res) => {
    var userLists = []
    User.find().then((result) => {
        console.log(result);
        res.render("home", {
            lists: result
        })
    })
})

app.get("/adduser", (req, res) => {
    res.render("adduser")
})

//提交数据接口
app.post("/tosubmintuser", (req, res) => {
    console.log(req.body);
    let obj = req.body
    User.create(obj).then((resault) => {
        console.log(resault);
        res.redirect("/home")  //重定向--重新跳转到home页面
    })
})

//删除数据的路由
app.get("/deleuser", (req, res) => {
    // localhost:3000/deleuser?id=5f967d2d4a707720f4368f98
    //{ id: '5f967d2d4a707720f4368f98' }
    console.log(req.query);
    User.findOneAndDelete({ "_id": req.query.id }).then(result => {
        console.log(result);
        res.redirect("/home") //重定向--重新跳转到home页面
    })
})

//修改用户路由
app.get("/edituser", (req, res) => {
    console.log(req.query);
    User.findOne({ "_id": req.query.id }).then(result => {
        console.log(result);
        res.render("edituser", {
            editData: result
        })
    })

})
//点击确定修改按钮提交表单
app.post("/toedituser", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    let obj = req.body
    User.updateOne({ "_id": req.query.id }, obj).then(result => {
        console.log(result);
        res.redirect("/home") //重定向--重新跳转到home页面
    })
})

//监听一个端口号
app.listen(3000, () => {
    console.log("3000running");
})

//操作表单
//如果提交方式是post 通过req.body来接收数据，需要下载body-parser模块
//如果是get传值   通过req.query来接收数据


