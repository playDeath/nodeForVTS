const Koa = require("koa")
const koa_static = require("koa-static")   // koa 必须引用第三方中间件

const app = new Koa()

app.use(koa_static("./dist"))
app.listen(8888,()=>{
    console.log("静态资源服务器已启用!");
})