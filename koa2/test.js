const Koa = require('koa')
const app = new Koa()
 
app.use( async ( ctx ) => {
  let url = ctx.request.url//获取url
  ctx.body = url
})
app.listen(3001)

