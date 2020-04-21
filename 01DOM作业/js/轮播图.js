//首先我们要获取到他们,便于接下来操作
var Img=document.getElementById("img");
var Lis=document.getElementsByTagName("li");
var Left=document.getElementById("left");
var Right=document.getElementById("right");
var index=-1;
var Banner=document.getElementById("banner");
//定时器(需要定义的函数,它的毫秒数)
var timer=setInterval("lunbo()",1800);
//利用定时器使图片达到轮播效果
function lunbo(){
    index++;
    resetColor();
    if(index == 4){
        index=0;
    }
    Img.src="img/0"+index+".jpg";
    Lis[index].style.background="orchid";
}
//小原点初始值颜色(定义函数,在定时器去调用它)
function resetColor(){
    for(var i=0;i<Lis.length;i++){
        Lis[i].style.background="rgba(100,100,100,.5)";
    }
}
//鼠标移入和移出
Banner.onmouseover=function(){
    clearInterval(timer);
}
Banner.onmouseout=function(){
    //变量作用域,因为这边已经给它清除了,所以必须重新声明它.
    timer=setInterval("lunbo()",1800);
}
//点击小圆点切换图片到指定位置
for (var i=0;i<Lis.length;i++) {
    Lis[i].onclick = function(){
        clearInterval(timer);
        index = this.innerHTML-1;
        Img.src="img/0"+index+".jpg";
        resetColor();
        Lis[index].style.background = "orchid";
        timer = setInterval("lunbo()",1800);                
    }
}
//左边和右边按钮切换
Left.onclick = function(){
    index--;
    if (index == -1) {
        index = 3;
    }
    Img.src="img/0"+index+".jpg";
    resetColor();
    Lis[index].style.background = "orchid";
}
Right.onclick = function(){
    if (index == 3) {
        index = -1;
    }
    index++;
    Img.src="img/0"+index+".jpg";
    resetColor();
    Lis[index].style.background = "orchid";
}