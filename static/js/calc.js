"use strict";

document.addEventListener("DOMContentLoaded",function(){
  var btn = document.getElementsByClassName("blue");
  var btn_nums = btn.length;
  var input_display = document.getElementById("result");
  var click_action = new Array();
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
      click_action.pop(-1);
      click_action.push(input_display.value);
      console.log(click_action);
    })
  }
  /*
    btn.addEventListener("click",function(){
        var nowClass = btn.getAttribute("class");
        var addClass = nowClass + " red";
        btn.setAttribute("class",addClass);
    },false);
    */
},false);

