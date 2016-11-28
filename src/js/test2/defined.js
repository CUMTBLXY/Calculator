"use strict";
/**
 * var 关键字定义的变量只能止于当前作用域范围中
 *
 * 作用域以函数为界
 *
 * 单个作用域中 规范写法为先定义后引用
 * (其实先引用 最后定义也是可以的，笔试时考点，但实际工作中傻瓜才这么写~)
 *
 * 最后一点 作用域是传递的 在作用域中 一个引用如果没找到定义 会向父级作用域中寻找此变量的定义
 * 一直找到最外层的window作用域停止
 * */

function testDefined(){
    window.b=0;
    var a = 3;
    console.log(a);
    console.log(a);
}
testDefined();
console.log(b);