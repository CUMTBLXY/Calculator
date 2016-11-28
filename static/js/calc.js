"use strict";

document.addEventListener("DOMContentLoaded",function(){
  var btn = document.getElementsByClassName("blue");
  var btn_nums = btn.length;
  var input_display = document.getElementById("result");
  var click_action = new Array();
  var clear = document.getElementsByClassName("org")[0];
  var equal = document.getElementsByClassName("org")[1];
  equal.addEventListener("click", function(){
  })
  var symbol = document.getElementsByClassName("zong");
  for (var item = 0; item < symbol.length; item ++)
  {
    symbol[item].addEventListener("click", function(){
      if (click_action.length == 0)
      {
        input_display.value = "0" + this.innerHTML;
      }
      else
      {
        input_display.value += this.innerHTML;
      }
      console.log(this.innerHTML);
      click_action.push(this.innerHTML);
    })
  }
  clear.addEventListener("click", function(){
    input_display.value = 0;
    click_action = [];
  });
  for (var item = 0; item < btn_nums; item ++)
  {
    btn[item].addEventListener("click", function(){
      var btn_content = this.innerHTML;
      if (click_action.length == 0)
      {
        input_display.value = btn_content;
      }
      else
      {
        input_display.value += btn_content;
      }
      if (click_action.length == 0 || !click_action[click_action.length - 1].match('[0-9]+'))
      { // 正则匹配上一次按下数字键或是运算符
        click_action.push(btn_content);
      }
      else
      {
        click_action[click_action.length - 1] += btn_content;
      }
      console.log(click_action);
    })
  }
},false);

