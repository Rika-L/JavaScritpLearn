//原型链的概念

// 除了用{...}创建一个对象外,还可以构造函数
function Student(name) {
    this.name = name;
    // this.hello = function () {
    //     console.log('Hello,' + this.name + '!');
    // }
}

//hello可以这样改写以提升效率
Student.prototype.hello = function () {
    console.log('Hello,' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}

//可以使用关键字new来调用这个函数,并返回一个对象
let xiaoming = createStudent('小明');
console.log(xiaoming.name);
xiaoming.hello();

//如果不写new,这就是一个普通函数,返回undefined
//写了new就变成了构造函数,绑定的this指向新创建的对象,并默认返回this
// 新创建的xiaoming的原型链是:
//xiaoming ---> Student.prototype ---> Object.prototype ---> null

//练习 请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'：

function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function () {
    return ('Hello, ' + this.name + '!');
}
// 测试:
let kitty = new Cat('Kitty');
let doraemon = new Cat('哆啦A梦');

console.log(kitty.say())

if (kitty && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say
) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}