//又又又又跟python差不多

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

let xiaoming = new Student('小明');
xiaoming.hello();

//class继承
//用class最大的好处:继承方便
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); //用super方法调用父类的构造方法
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

//练习 请利用class重新定义Cat，并让它从已有的Animal继承，然后新增一个方法say()，返回字符串'Hello, xxx!'：
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    say() {
        return ('Hello, ' + this.name + '!');
    }
}

// 测试:
let kitty = new Cat('Kitty');
let doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal)
    && kitty
    && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}