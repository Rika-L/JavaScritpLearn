function Student(props) {
    this.name = props.name || 'Unnamed';
}

//hello可以这样改写以提升效率
Student.prototype.hello = function () {
    console.log('Hello,' + this.name + '!');
};


//基于Student拓展出PrimaryStudent
function PrimaryStudent(props) {
    //调用Student构造函数，绑定this变量
    Student.call(this, props);
    this.grade = props.grade || 1;
}

//空函数F:
function F() {

}

//把F的原型指向Student.prototype
F.prototype = Student.prototype

//把PrimaryStudent的原型指向新的F对象，F对象的原型正好指向Student.prototype
PrimaryStudent.prototype = new F();

// 继续在PrimaryStudent原型上定义方法
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
}

//创建xiaoming
let xiaoming = new PrimaryStudent({name: '小明', grade: 2});
console.log(xiaoming.name);
