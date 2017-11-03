
const mongodb = require('mongodb')
const R = require('r-script')
const fs = require('fs')
//
exports.postReq = async (ctx, next) => {
  console.log(ctx.request.body)
  const out = await R("./Rcode/r-test.R")
  const d = out.data(ctx.request.body)
  const p = await d.call(function(err, d) {console.log(d)});
  async (p) => console.log(p)
  ctx.response.body = await JSON.stringify('http://localhost:8080/Rcode/rplot.jpg')
}
