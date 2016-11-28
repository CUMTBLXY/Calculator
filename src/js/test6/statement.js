//判断语句

if(1>2){

}else if(2>1){

}else{

}

//多分支等值判断

var v='ssss';
switch (v){
    case 'sss':
        break;
    case 'ssss':
//        alert(0);
        break;
    default :
        break;
}


//for循环

for(var i=0;i<10;i++){
    console.log(i);
}

//for in 循环

var obj={
    y:"22222",
    x:"11111"
}
for(var key in obj){
    console.log(key+":"+obj[key]);
}


//while 循环
var i=0;
while(i<11){
    console.log(i);
    if(i>5){
        break;
    }
    i++;
}

//break continue
