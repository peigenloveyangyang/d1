var btn = document.getElementById("l-btn");
var olLis = btn.getElementsByTagName("li");
var banner = document.getElementById("l-banner");
var ulLis = banner.getElementsByTagName("li");
var rightBtn = document.getElementById("l-rightBtn");
var leftBtn = document.getElementById("l-leftBtn");
var box=document.getElementById("l-box");

var index = 0;
var timer = null;
//设置轮播图的宽度
banner.style.width = ulLis[0].offsetWidth*ulLis.length + "px"
function tab(){
    for(var i=0; i<ulLis.length; i++){
        olLis[i].className = "";
    }
    olLis[index].className = "l-actBtn";
    banner.style.left = -ulLis[0].offsetWidth*this.index +"px";
    banner.style.transition = "all 1s";
}
for(var i=0; i<ulLis.length; i++){
    olLis[i].index = i;
    olLis[i].onclick = function(){
        index = this.index;
        tab();
    }
}
function move(){
    timer = setInterval(function(){
        index++;
        if (index>3) {
            index = 0;
        }
        tab();
    }, 2000)
}
move();
box.onmouseover = function(){
    clearInterval(timer);
};
box.onmouseout = function(){
    move();
};
//右侧按钮
rightBtn.onclick = function(){
    index++;
    if (index>3) {
        index = 0;
    }
    tab()
};
//左侧按钮
leftBtn.onclick = function(){
    index--;
    if (index<0) {
        index = 3;
    }
    tab();
}