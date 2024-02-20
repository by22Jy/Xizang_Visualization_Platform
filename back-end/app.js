// 服务器入口文件
const Koa = require('koa');
const app = new Koa();

// 绑定中间件
// 1、总耗时中间件
const durationMiddleware = require('./middleware/response_duration');
app.use(durationMiddleware)
// 2、 响应头中间件 设置编码格式
const responseHeaderMiddleware = require('./middleware/response_header')
app.use(responseHeaderMiddleware)
// 3、 响应处理逻辑中间件
const responseDataMiddleware = require('./middleware/response_data')
app.use(responseDataMiddleware)
// 监听端口
app.listen(8888)

const webSocketService = require('./service/web_socket_service')
// 开启监听
webSocketService.listen()