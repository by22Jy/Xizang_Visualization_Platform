const fs = require('fs')
module.exports.getFileJsonData = (filepath) =>{
    // 根据文件路径 读取文件内容
    return new Promise((resolve,reject) => {
        fs.readFile(filepath,'utf-8',(error,data)=>{
            if(error){
                // 读取失败
                reject(error)
            }else{
                // 读取成功
                resolve(data)
            }
        })
    })
}