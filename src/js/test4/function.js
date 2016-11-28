"use strict";
/**
 * 函数的两种定义方法
 * */


/*var add = function(a,b){
    return a+b;
}
console.log(add(1,2));*//*

console.log(add2(12,3));
function add2(a,b){
    return a+b;
}*/

/**
 * 对象中的函数
 * */


/*var obj = {
    add0:function(a,b){
        return a+b;
    },
    add1:function(a,b){
        return a+b;
    },
    add2:function(a,b){
        return a+b;
    }
}

for(var i=0;i<3;i++){
    console.log(obj["add"+i](1,i));
}*/

/*console.log(obj.add(1,2));*/

/*if("add" in obj){
    console.log(obj["add"](12,2));
}*/


//函数中的this 指向调用函数的对象

//var obj  ={
//    x:10,
//    y:5,
//    add:function (a,b){
//        this.x++;
//        /*console.log(this.x);
//        console.log(this.y);*/
//        return a+b;
//    }
//}
//obj.add();
//obj.add();
//obj.add();
//obj.add();
//console.log(obj.x);

//闭包  能够读取其他函数内部变量的函数

function a(){
    var x=10;
    var y=100;
    function getX(){
        return x++;
    }
    return getX;
}

var iWantX = a();
console.log(iWantX());
console.log(iWantX());
console.log(iWantX());
console.log(iWantX());
//iWantX=null;





