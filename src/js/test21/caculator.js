"use strict";
//var result = document.getElementById("result");
//result.value = "0";
document.getElementById("result").value = '';
var num = parseInt("108");
console.log(num);
var num2 = parseFloat("108.22");
console.log(num2);

document.addEventListener("DOMContentLoaded",function(){

    var number = document.getElementsByClassName("btn blue");//数字
    var operators = document.getElementsByClassName("btn zong");//运算符
    var clearscream = document.getElementsByClassName("btn org")[0];//清除
    var equalevent = document.getElementsByClassName("btn org")[1];//等号
    var tuige = document.getElementsByClassName("btn")[1];//退格
    var space =new Array();
    space = [];
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
        space = [];
    }, false);

    //等号
    equalevent.addEventListener("click", function () {
        var display = document.getElementById("result");
        var comdis = new RegExp("[0-9]");
        if(comdis.test(display.value)) {
            space.push(display.value);
        }
        if (space[0] == ''){
            space.shift();
        }
        console.log(space.toString());
        display.value = startyunsuan();
        space = [];
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
                    space.push(display.value);
                    display.value = input;

                }
            }
        }
        else{//如果输入符号之前是数字就清空
            if(compnumber.test(display.value)||comppoint.test(display.value)){
                space.push(display.value);
                display.value = input;

            }
            else{//如果之前输入的仍旧是符号的话
                console.log(display.value);
                console.log(typeof(display.value));
            }
        }

    }

    function startyunsuan(){//当用户摁下等号时对存储的数据进行运算
        if (space[0] == ''){
            space.shift();
        }
        var temp = 0;
        if( 1) {
            while(space.indexOf('×') != -1 || space.indexOf('÷') != -1) {//先寻找有没有乘号或者除号
                if (space.indexOf('×') != -1 && space.indexOf('÷') != -1) {
                    if (space.indexOf('×') <= space.indexOf('÷')) {
                        temp = parseFloat(space[space.indexOf('×') - 1]) * parseFloat(space[space.indexOf('×') + 1]);
                        space.splice(space.indexOf('×') - 1, 3, temp);
                    }
                    else {
                        temp = parseFloat(space[space.indexOf('÷') - 1]) / parseFloat(space[space.indexOf('÷') + 1]);
                        space.splice(space.indexOf('÷') - 1, 3, temp);
                    }
                }
                else{
                    if(space.indexOf('×') != -1){
                        temp = parseFloat(space[space.indexOf('×') - 1]) * parseFloat(space[space.indexOf('×') + 1]);
                        space.splice(space.indexOf('×') - 1, 3, temp);
                    }
                    else{
                        temp = parseFloat(space[space.indexOf('÷') - 1]) / parseFloat(space[space.indexOf('÷') + 1]);
                        space.splice(space.indexOf('÷') - 1, 3, temp);
                    }
                }
            }
            while(space.indexOf('+')!= -1 || space.indexOf('-')!= -1) {
                if(space.indexOf('+')!= -1 && space.indexOf('-')!= -1){
                    if(space.indexOf('+')<=space.indexOf('-')) {
                        temp = parseFloat(space[space.indexOf('+')-1])+parseFloat(space[space.indexOf('+')+1]);
                        space.splice(space.indexOf('+')-1,3,temp);
                    }
                    else{
                        temp = parseFloat(space[space.indexOf('-')-1])-parseFloat(space[space.indexOf('-')+1]);
                        space.splice(space.indexOf('-')-1,3,temp);
                    }
                }
                else{
                    if(space.indexOf('+')!= -1){
                        temp = parseFloat(space[space.indexOf('+')-1])+parseFloat(space[space.indexOf('+')+1]);
                        space.splice(space.indexOf('+')-1,3,temp);
                    }
                    else{
                        temp = parseFloat(space[space.indexOf('-')-1])-parseFloat(space[space.indexOf('-')+1]);
                        space.splice(space.indexOf('-')-1,3,temp);
                    }
                }
            }
        }
        return space[0];

    }

    tuige.addEventListener("click",function(){
        console.log('1');
        var compnumber = new RegExp("[0-9]");
        var comppoint = new RegExp("[.]");
        var display = document.getElementById("result");
        if(display.value.length != 0){
            if (compnumber.test(display.value)||comppoint.test(display.value)) {//如果输入的是数字的话，先判断前一个是否是数字，还是运算符号
                console.log(typeof(display.value));
                display.value = display.value.slice(0,-1);
            }
            else{//如果输入符号之前是数字就清空
                display.value = '';
            }
        }
        else{
            console.log(space);
            display.value = space.pop();
        }
    },false);
},false);

