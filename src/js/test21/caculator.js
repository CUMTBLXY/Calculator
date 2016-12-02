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
    var clearscream = document.getElementsByClassName("btn org")[0];
    var equalevent = document.getElementsByClassName("btn org")[1];
    var result ;
    var space = [];

    //数字键
    for (var i=0;i<number.length;i++) {
        number[i].addEventListener("click", function () {

                var display = document.getElementById("result");
                var addnum = this.innerHTML;
                yunsuan(addnum);

        }, false);
    }


    //运算符
    for (var i=0;i<operators.length;i++) {

        operators[i].addEventListener("click", function () {

            var display = document.getElementById("result");
            var addnum = this.innerHTML;
            yunsuan(addnum);


        }, false);
    }

    //清除
    clearscream.addEventListener("click", function () {
        document.getElementById("result").value = '';
    }, false);
    //等号
    equalevent.addEventListener("click", function () {
        var display = document.getElementById("result");
        var comdis = new RegExp("[0-9]");
        if(comdis.test(display)) {
            space.push(display);
        }

        display.value = startyunsuan();

    }, false);

    function yunsuan(input){//输入时对显示屏的清空
        var compnumber = new RegExp("[0-9]");
        var comppoint = new RegExp("[.]");
        //var compsigh = new RegExp("[+-×÷]");
        var display = document.getElementById("result");
        if (compnumber.test(input)||comppoint.test(input)) {//如果输入的是数字的话，先判断前一个是否是数字，还是运算符号
            if(comppoint.test(input)){//判断这次输入的是否是小数点
                if(!comppoint.test(display.value)){//如果原数组不存在小数点
                    display.value = display.value+input;
                }
                else{
                    console.log(display.value);
                }
            }
            else{
                if (compnumber.test(display.value)) {//是数字符号，就不清空显示屏
                    display.value = display.value+input;
                }
                else {//是符号就清空
                    display.value = input;
                    space.push(input);
                }
            }
        }
        else{//如果输入符号之前是数字就清空
            if(compnumber.test(display.value)||comppoint.test(display.value)){
                display.value = input;
                space.push(input);
            }
            else{//如果之前输入的仍旧是符号的话
                console.log(display.value);
            }
        }

    }

    function startyunsuan(){
        
    }

},false);

