console.log(Math);

//PI
console.log(Math.PI);

//三角函数 弧度
console.log(Math.sin(Math.PI/2));
console.log(Math.cos(Math.PI));



//最值
var a=1;
var b=2;
var c=0.5;
console.log(Math.min(a,b,c));
console.log(Math.max(a,b,c));


//绝对值

var ab = -1.1234;
console.log(Math.abs(ab));

//舍入

var num = -2.5;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num)); //负数的四舍五入

//随机数
console.log("随机数");
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10)+10);//11--20;


//乘方 开方

console.log(Math.pow(3,10));
console.log(Math.sqrt(25));



