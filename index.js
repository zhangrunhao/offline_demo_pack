const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()

// response
app.use(async ctx => {
  if (ctx.url.indexOf('/client') === 0) {
    ctx.response.type = path.extname(ctx.url)
    ctx.response.body = fs.createReadStream(`.${ctx.url}`)
  } else if (ctx.url.indexOf('/api') === 0) {
  } else {
    // 404
  }
})
console.log("===========")
app.listen(3000)