"use strict";
alert("我是文件引入js");
window.onload = function(){
    var asynScript = document.createElement("script");
    asynScript.setAttribute("src","../src/js/test1/import_asyn.js");
    document.body.appendChild(asynScript);
}
