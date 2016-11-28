"use strict";
var now = new Date();
console.log(now);

var year = now.getFullYear();
var ye = now.getYear();
console.log(year);
console.log(ye);

var m = now.getMonth()+1; //real +1;
console.log(m);

var date = now.getDate();
console.log(date);

var hour = now.getHours();
console.log(hour);
var utcHour = now.getUTCHours();
console.log(utcHour);

var minu = now.getMinutes();
console.log(minu);

var sec = now.getSeconds();
console.log(sec);

var day = now.getDay();
console.log(day);


//格式化
function dateFormat(fmt,date){
    if(!date){
        date = this.now();
    }
    function dateWeekDay(date){
        var dayMap = ["日","一","二","三","四","五","六"];
        return dayMap[date.getDay()];
    }
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "D+": dateWeekDay(date),
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var ms = now.getTime();
console.log(ms);

var nowDateStr = dateFormat('yyyy年MM月dd日 hh:mm 周D',now);
console.log(nowDateStr);

var laterTime=new Date();
laterTime.setTime(now.getTime()+100*24*60*60*1000);

var lateDateStr = dateFormat('yyyy年MM月dd日 hh:mm 周D',laterTime);
console.log(lateDateStr);


