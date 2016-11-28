"use strict";
/**
 *字符串
 * */

/*var str = '字符串';
console.log(str);
var str2 = new String("字符串");
console.log(str2);

console.log(str==str2);*/

/*var str = "我们都是好学生";
console.log(str.length);
console.log(str.replace("我","你"));
console.log(str);
console.log(str.substr(1,3));
console.log(str.substring(1,3));*/



/**
 * 数字
 * */

/*var a = 3;
console.log(a);
var b = 3.1;
console.log(b);
var c = new Number(3.1);
console.log(c);
console.log(b==c);*/

/**
 * boolean;
 * */

/*var flag = true;
var flag1 = 1>3;
var flag2 = new Boolean(1>3);
console.log(flag);
console.log(flag1);
console.log(flag2);*/

/**
 * 数组
 * */

/*var array = [1,'我',3];
*//*console.log(array);
//var array2 = new Array(1,2,3);
var array2 = [10,array,3];
console.log(array2);*//*
//console.log(array==array2);
//数组有一些基本操作
//末尾添加一个元素
array.push(5);
console.log(array);

//末尾删除一个元素
var a = array.pop();
console.log(a);
console.log(array);

//最前加一个元素
array.unshift(0);
console.log(array);
//最前取出一个元素
var head = array.shift();
console.log(head);
console.log(array);*/
//更多操作 慢慢聊

/**
 * 对象
 * */

/*var obj = {
    x:[1,{
        a:1,
        b:2
    },3],
    y:2
}
console.log(obj);
console.log("x" in obj);
console.log("x1" in obj);
console.log(obj.x);*/

/*var o={
    value:4,
    self:null
}
o.self=o;
console.log(o);*/

//对象和数组都可以 引入其他数据类型  是最灵活的两种数据类型
//更深层次的 js中所有数据类型都是对象

/**
 * null undefined
 * */

//console.log(null==undefined);
//console.log(typeof a == 'null');
