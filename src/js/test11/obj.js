"use strict";
//字面量
var point = {
    x:19,
    y:20
};
console.log(point);

//类
function Animal(name){
    this.name = name;
}
Animal.prototype={
    name:"",
    run:function(){
        console.log(this.name+" 要跑了");
    }
}

//new Animal();

//使用类初始化对象
/*var sAnimal = new Animal("tom");
console.log(sAnimal);
sAnimal.run();*/



//类方法
/*Animal.create = function(name){
    console.log(name+" is creating");
    return new Animal(name);
}
var hAnimal = Animal.create("jerry");
console.log(hAnimal);
hAnimal.run();*/




//__proto__ 和 prototype 原型链
function Cat(name){
    this.name = name;
}
Cat.prototype = new Animal();
Cat.prototype.run = function(){
    console.log(this.name+"是一只猫 要跑了");
}


var tom = new Cat("tom");
console.log(tom);
tom.run();

