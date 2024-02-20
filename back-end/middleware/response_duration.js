// 记录耗时时间
module.exports = async(ctx,next) => {
    // 记录开始时间
    const now = Date.now();
    // 异步放行
    await next();
    // 记录结束时间
    const end = Date.now();
    const duration = end - now;
    // 设置响应头
    ctx.set('X-Duration-Time',duration + 'ms');
}