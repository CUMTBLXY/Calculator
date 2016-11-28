"use strict";
console.log(history);

var goBtn = document.getElementById("go");
goBtn.addEventListener("click",function(){
    window.location.href = 'http://localhost:63342/lesson2/html/htmljs_17_history.html?r='+Math.random();
},false);