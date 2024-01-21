//浏览器事件，都必须异步执行，可以使用回调函数实现
function callback() {
    console.log('Done');
}

console.log('Before setTimeout()');
setTimeout(callback, 100); //1秒后调用callback函数
console.log('After setTimeout()');

//Promise对象即‘承诺将来会执行的对象’

new Promise(function () {
});
console.log('支持Promise')

function log(s){
    console.log(s);
}

//一个最简单的例子，生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败
function test(resolve, reject) {
    let timeOut = Math.random() * 2;
    log('set timeout to:' + timeOut + 'seconds');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        } else {
            log('call resolve()...');
            reject('timeout in' + timeOut + 'second.');
        }
    }, timeOut * 1000);
}

let p1 = new Promise(test);
let p2 = p1.then(function (result) {
    console.log('成功' + result);
});
let p3 = p2.catch(function (reason){
    console.log('失败:' + reason);
})


