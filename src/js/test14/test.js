"use strict";
//测试事件系统

var now = new Date();
var oldMinu = now.getMinutes();
setInterval(function(){
    var newNow = new Date();
    var newMinu = newNow.getMinutes();
    if(newMinu!=oldMinu){
        //触发事件
        var event = new QEvent(QEvent.EventName.ON_MINU_CHANGE);
        EventManager.postMsg(event);

        oldMinu = newMinu;
    }
},1000);
console.log(new Date());
EventManager.addEventListener(QEvent.EventName.ON_MINU_CHANGE,function(event){
    console.log(new Date());
});