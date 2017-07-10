

function  Genel(lis,divs){	   //lis是按钮框的组合，divs是内容框的组合
    for(var i=0;i<lis.length;i++){
        lis[i].index =i;
        lis[i].onclick = function(){
            for(var i=0;i<lis.length;i++){  //删除之前的所有状态
                lis[i].className = "";
                divs[i].className= "";
            }
            this.className = "p_lis1";				//按钮的类名
            divs[this.index].className = "p_lis2";	//div的类名
        }
    }
}
Genel($('.p_x_ul1>li'),$('.p_x_ul2>li'));

var reg = /\d{3}(\d{10})/;
y = $('.p_pinlun_sp').html().replace(reg,'***$1');
$('.p_pinlun_sp').html(y);

