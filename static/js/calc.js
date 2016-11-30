"use strict";

document.addEventListener("DOMContentLoaded",function(){
  var btn = document.getElementsByClassName("blue");
  var btn_nums = btn.length;
  var click_action = new Array();
  var output_display = document.getElementById("result");
  var clear = document.getElementsByClassName("org")[0];
  var equal = document.getElementsByClassName("org")[1];
  var symbol = document.getElementsByClassName("zong");
  var backspace = document.getElementById("backspace")

  // 退格点击事件绑定
  backspace.addEventListener("click", function(){
    if (is_symbol(click_action))
    {
      click_action.pop();
    }
    else
    {
      var last_of_number = click_action.pop();
      var after_backspace = last_of_number.slice(0, -1);
      if (after_backspace.length > 0)
      {
        click_action.push(last_of_number.slice(0, -1));
      }
    }
    output_display.value = output_display.value.slice(0, -1);
  })

  // 清除点击事件绑定
  clear.addEventListener("click", function(){
    output_display.value = 0;
    click_action = [];
  });

  // 等号点击事件绑定
  equal.addEventListener("click", function(){
    hand_symbol(click_action, "×");
    hand_symbol(click_action, "÷");
    hand_symbol(click_action, "+");
    hand_symbol(click_action, "-");
    output_display.value = click_action[0];
  });

  // 运算符点击事件绑定
  for (var item = 0; item < symbol.length; item ++)
  {
    symbol[item].addEventListener("click", function(){
      if (click_action.length == 0)
      {
        output_display.value = "0" + this.innerHTML;
        click_action.push(this.innerHTML);
      }
      else
      {
        if (is_symbol(click_action))
        {
          output_display.value = output_display.value.replace(/.$/g, this.innerHTML);
          click_action[click_action.length-1] = this.innerHTML;
        }
        else
        {
          output_display.value += this.innerHTML;
          click_action.push(this.innerHTML);
        }
      }
    })
  }
  // 数字点击事件绑定
  for (var item = 0; item < btn_nums; item ++)
  {
    btn[item].addEventListener("click", function(){
      var btn_content = this.innerHTML;
      if (click_action.length == 0)
      {
        output_display.value = btn_content;
      }
      else
      {
        output_display.value += btn_content;
      }
      if (click_action.length == 0 || is_symbol(click_action))
      {
        click_action.push(btn_content);
      }
      else
      {
        click_action[click_action.length - 1] += btn_content;
      }
    })
  }
},false);

function hand_symbol(lst, symbol)
{ /*
   * 处理运算符计算结果
   * support:
   * 1 + 2 x 3 ÷ 4
   * 结果保留,二次计算
   */
  while (lst.indexOf(symbol) > 0 && lst.indexOf(symbol) < lst.length)
  {
    var index_of_symbol = lst.indexOf(symbol);
    if (symbol == "+")
    {
      var temp = parseFloat(lst[index_of_symbol-1]) + parseFloat(lst[index_of_symbol+1]);
    }
    if (symbol == "-")
    {
      var temp = parseFloat(lst[index_of_symbol-1]) - parseFloat(lst[index_of_symbol+1]);
    }
    if (symbol == "×")
    {
      var temp = parseFloat(lst[index_of_symbol-1]) * parseFloat(lst[index_of_symbol+1]);
    }
    if (symbol == "÷")
    {
      var temp = parseFloat(lst[index_of_symbol-1]) / parseFloat(lst[index_of_symbol+1]);
    }
    lst[index_of_symbol] = temp;
    lst.splice(index_of_symbol+1, 1);
    lst.splice(index_of_symbol-1, 1);
  }
}

function is_symbol(lst)
{ /*
   * 正则匹配上一次按下数字键或是运算符
   */
  return !lst[lst.length - 1].toString().match('[0-9]+');
}
