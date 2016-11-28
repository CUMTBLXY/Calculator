"use strict";
/**
 * 页面加载后 浏览器在内存中会建立一个树形结构 称为dom树
 * js可以操作此dom树 来更改html内容
 * 浏览器察觉dom的更改后 会对页面的显示做出对应调整
 * */
console.log(document);
//通过id选择操作标签
var contentDiv = document.getElementById("content");
console.log(contentDiv);
//setTimeout(function(){
//    contentDiv.innerHTML="变成这个样子了";
//    contentDiv.setAttribute("class","border");
//    alert(contentDiv.getAttribute("age"));
//},5000);




//通过class选择

//var eles=document.getElementsByClassName("con");
//console.log(eles);
//var first = eles[1];
//setTimeout(function(){
//    first.innerHTML = "我是第一个元素"
//},2000);


//querySelector
var eles1 = document.querySelector(".con");
//console.log(eles1);
//console.log(contentDiv1);
//setTimeout(function(){
//    contentDiv1.innerHTML="变成这个样子了2";
//    contentDiv1.setAttribute("class","border");
//    alert(contentDiv.getAttribute("age"));
//},5000);

//创建元素 添加元素 删除元素

var contentDiv = document.getElementById("content");
var ele = document.createElement("a");
ele.setAttribute("href","http://www.baidu.com/");
ele.innerHTML="我要去百度";
setTimeout(function(){
    contentDiv.appendChild(ele);
},2000);



