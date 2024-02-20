const WebSocket = require('ws')
const path = require('path')
const fileUtils = require('../utils/file_utils')
const ws = new WebSocket.Server({
    port: 9998
})

module.exports.listen = () => {
    ws.on('connection', client => {
        console.log('connection test')
        client.on('message', async msg => {
            const parse = JSON.parse(msg)
            // 获取前端的请求行为
            const action = parse.action
            if(action === 'getData'){
                let filepath = `../data/` + parse.chartName + '.json'
                filepath = path.join(__dirname , filepath)
                // 增加data字段
                parse.data = await fileUtils.getFileJsonData(filepath)
                client.send(JSON.stringify(parse))
            }else {
                // 不请求数据 原封不动返回至客户端
                ws.clients.forEach(client => {
                    client.send(msg)
                })
            }
        })
    })
}