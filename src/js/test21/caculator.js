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

    for (var i=0;i<number.length;i++) {
        number[i].addEventListener("click", function () {

                var display = document.getElementById("result");
                var addnum = this.innerHTML;
                display.value = display.value+addnum;
        }, false);
    }

    for (var i=0;i<operators.length;i++) {

        operators[i].addEventListener("click", function () {

            var display = document.getElementById("result");
            var addnum = this.innerHTML;
            display.value = addnum;

        }, false);
    }

    function yunsuan(input){
        var compnumber = new RegExp([0-9]);
        var compsigh = new RegExp([+-×÷])
        if (compnumber.test(input))
            var display =document.getElementById("result");
            if (compsigh.test(display)){
                display.value = now;
        }
            else{

        }

    }

},false);

