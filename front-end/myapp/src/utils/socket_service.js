export default class SocketService {
  // 单例设计模式
  static instance = null
  static get Instance () {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  ws = null

  // 存储回调函数
  callBackMapping = {}
  // 标识是否已经连接成功
  connected = false
  // 重试次数
  retryTimes = 0
  // 重连次数
  reconnectTimes = 0
  // 连接后端
  connect () {
    if (!window.WebSocket) {
      return console.log('您的浏览器不支持')
    }
    this.ws = new WebSocket('ws://localhost:9998')

    this.ws.onopen = () => {
      this.reconnectTimes = 0
      this.retryTimes = 0
      console.log('连接成功')
      this.connected = true
    }

    this.ws.onclose = () => {
      console.log('连接失败')
      this.connected = false
      setTimeout(() => {
        this.connect()
      }, this.reconnectTimes * 500)
      this.reconnectTimes++
    }

    this.ws.onmessage = msg => {
      const data = JSON.parse(msg.data)
      const socketType = data.socketType
      // 判断回调函数是否存在
      if (this.callBackMapping[socketType]) {
        const action = data.action
        if (action === 'getData') {
          // 获取添加的data字段
          const realData = JSON.parse(data.data)
          // 调用写的回调函数
          this.callBackMapping[socketType].call(this, realData)
        } else if (action === 'fullScreen') {
          return null
        } else if (action === 'themeChange') {
          return null
        }
      }
    }
  }

  // 注册回调函数
  registerCallBack (socketType, callBack) {
    this.callBackMapping[socketType] = callBack
  }
  // 注销回调函数

  unRegisterCallBack (socketType) {
    this.callBackMapping[socketType] = null
  }
  // 发送数据方法

  send (data) {
    if (this.connected) {
      this.ws.send(JSON.stringify(data))
    } else {
      setTimeout(() => {
        this.send(data)
      }, this.retryTimes * 500)
      this.retryTimes++
    }
  }
}
