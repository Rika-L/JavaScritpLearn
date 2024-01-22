//1.引入express
const express = require('express')
//2. 创建应用对象
const app = express()

//3.创建路由规则
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*');
    //设置响应
    response.send('HELLO AJAX');
});

//可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'Rika'
    };
    let str = JSON.stringify(data);
    //设置响应
    response.send(str);
});
app.all('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'Rika'
    };
    let str = JSON.stringify(data);
    //设置响应
    response.send(str);
});
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置延迟
    setTimeout(()=>{
        //设置响应
        response.send('HELLO AJAX POST');
    },3000);
});



//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...');
})