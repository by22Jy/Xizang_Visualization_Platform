const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async(ctx,next) =>{
    const url = ctx.request.url;
    // 字符串拼接的方式将api/url转换为文件夹下的绝对路径
    let filepath = url.replace('/api','')
    filepath = '../data' + filepath + '.json'
    filepath = path.join(__dirname,filepath);

    // 返回的promise对象
    try{
        ctx.response.body = await fileUtils.getFileJsonData(filepath)
    }catch(error){
        const errorMessage = {
            'message' : 'error',
            'status' : 404
        }
        ctx.response.body = JSON.stringify(errorMessage)
    }
    console.log(filepath)
    await next()
}