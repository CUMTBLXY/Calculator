"use strict";
//添加点击事件



//DOMContentLoaded
document.addEventListener("DOMContentLoaded",function(){
    var btn = document.getElementById("btn1");
    console.log(btn);
    btn.addEventListener("click",function(){
        var nowClass = btn.getAttribute("class");
        var addClass = nowClass + " red";
        btn.setAttribute("class",addClass);
    },false);
},false);

