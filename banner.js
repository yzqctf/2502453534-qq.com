window.onload = function(){
    var leftBtn,rightBtn,imgCon;/* liList,preLi; */
    var position = 0;//判断当前位置
    init();//调用函数
    function init(){
        //左按钮
        leftBtn = document.getElementById("leftBtn");
        //右按钮
        rightBtn = document.getElementById("rightBtn");
        imgCon = document.getElementById("imgCon2");
        //点击,调用
        leftBtn.addEventListener("click",clickHandler);
        rightBtn.addEventListener("click",clickHandler);

    }

    function clickHandler(e){
        if(this===leftBtn){
            position--;
            if(position<0){
                position=1;
            }
            imgConMove();
            return;
        }else{
            position++;
        }
        if(position>1){
            position=0;
        }
        imgConMove();
    }
    
    // 滑动
    function imgConMove(){
        imgCon.style.left = -1021*position + 'px';

    }


    //自由的一直滚动
    var position2,wid,timer;//timer计时
    timer = null;
    position2 = 0;//页面
    var lb = document.getElementById("lb");//这个就是固定页面
    var imgCon_1 = document.getElementById("imgCon1");//滚动页面
    wid = lb.offsetWidth;//获取页面宽度，这样滚动的时候就可以整个页面滚动了
    /* alert(wid); */
    //定时滚动
    timer = setInterval(function(){
        position2++;
    },3000);
    imgCon_1.style.left = -wid*position2 + 'px'; 
     if(position2==2){
        position2 = 0;
        clearInterval(timer);
    }
  
 
}