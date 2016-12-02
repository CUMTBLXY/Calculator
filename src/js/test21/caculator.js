"use strict";
//var result = document.getElementById("result");
//result.value = "0";
document.getElementById("result").value = '';
var num = parseInt("108");
console.log(num);
var num2 = parseFloat("108.22");
console.log(num2);

document.addEventListener("DOMContentLoaded",function(){

    var number = document.getElementsByClassName("btn blue");
    var operators = document.getElementsByClassName("btn zong");

    var result = 0;

    for (var i=0;i<number.length;i++) {//数字键
        number[i].addEventListener("click", function () {

                var display = document.getElementById("result");
                var addnum = this.innerHTML;
                yunsuan(addnum);

        }, false);
    }

    for (var i=0;i<operators.length;i++) {//运算符

        operators[i].addEventListener("click", function () {

            var display = document.getElementById("result");
            var addnum = this.innerHTML;
            yunsuan(addnum);


        }, false);
    }

    function yunsuan(input){//输入时对显示屏的清空
        var compnumber = new RegExp([0-9]);
        var compsigh = new RegExp[+-×÷];
        var display = document.getElementById("result");
        if (compnumber.test(input)) {//如果输入的是数字的话，先判断前一个是否是数字，还是运算符号
            if (compsigh.test(display)) {//是运算符号，就清空显示屏
                display.value = input;

            }
            else {//是数字就继续累加
                display.value = display.value+input;
            }
        }
        if (compsigh.test(input)){//如果输入的是运算符就清空
            display.value = input;
        }

    }

},false);

