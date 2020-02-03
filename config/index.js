module.exports = {
    proxyTable: {
        // 例如将'localhost:8080/api/xxx'代理到'https://wangyaxing.cn/api/xxx'
        '/api': {
            target: 'https://cyonline.makeabetterworld.cn', // 接口的域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
			port:8050
        }
    },
}