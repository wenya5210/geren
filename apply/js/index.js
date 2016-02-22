$(function () {
    $(window).resize(function () {
        var clientW=$(window).width();
        if (clientW<730){
            $(".header1").css({display:"none"});
            $(".header2").css({display:"block"});
            $(".yi .text-list").css({display:"none"});
            $(".yi h1").css({display:"block",borderBottom:"1px solid #ccc"});
            $(".yi h1").on("click",function(){
                $(this).next(".text-list").finish().slideToggle();
            });
            
        }else if (clientW>730){
            $(".header1").css({display:"block"});
            $(".header2").css({display:"none"});
            $(".yi .text-list").css({display:"block"});
            $(".yi h1").css({display:"block",borderBottom:"0"});
            $(".yi h1").off();
        }
    });
    $(window).resize();
    $(".left").click(function(){
        $(".header3").finish().slideToggle();
    })
    $(".right").click(function(){
        $(".header4").finish().slideToggle();
    });
    







//    轮播

    var t=setInterval(move,2000);
    var num=0;
    function move(){
        num++;
        if(num==$(".banner-img").length-1){
            $(".box").finish().animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            });
            $(".lists li").removeClass("hot").eq(num).addClass("hot");
            num=0;
            $(".lists li").eq(0).addClass("hot");
        }else{
            $(".box").finish().animate({marginLeft:-num*100+"%"});
            $(".lists li").removeClass("hot").eq(num).addClass("hot");
        }
    }
//     单击按钮
    $(".lists li").click(function(){
        var index=$(this).index(".lists li");
        num=index;
        $(".lists li").removeClass("hot").eq(index).addClass("hot");
        $(".box").finish().animate({marginLeft:-num*100+"%"});

    })
    $(".banner").hover(function () {
        clearInterval(t);
    }, function () {
        t=setInterval(move,2000);
    });


    //  之所以给全局变量是因为是因为在拖拽的时候需要用到
    var margin;
    // 开始拖拽的时候就得获取一下到父容器的左边距
    touch.on(".box","dragstart", function () {
        margin=$(".box")[0].offsetLeft; // 原生方法
    });


    //  拖拽事件
    touch.on(".box","drag", function (e) {
        //console.log(e.x);
        //console.log(e.factor);
        //console.log(e.direction);


        //拖拽的时候给它个样式，
        // margin+e.x：表示要每次都得在原来的位置上加你移动的距离
        $(".box").css({"margin-left":margin+e.x});
    });

    //  拖拽结束事件
    touch.on(".box","dragend", function (e) {
        //  两个因素：  e.x  水平位移  一个是距离   factor:一个是速度
        if (Math.abs(e.x)>300|| e.factor<5){
            // direction ： 表示 拖拽的方向
            if (e.direction=="left"){   //  如果是向左移动
                num++;
                if(num==$(".banner-img").length-1){
                    $(".box").finish().animate({marginLeft:-num*100+"%"});
                    $(".box").css({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                    num=0;
                }else{
                    $(".box").finish().animate({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    $(".box").animate({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                    return;  //  到了第一张的时候  就不能在拖拽了。
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                    $(".lists li").removeClass("hot").eq(num).addClass("hot");
                }
            }
        }else {
            $(".box").animate({marginLeft:-num*100+"%"});
            $(".lists li").removeClass("hot").eq(num).addClass("hot");
        }
    });
    //noinspection JSUnresolvedFunction
    $(".box").mousedown(function (e) {
        e.preventDefault();
    });


    /*$("a").click(function () {
        return false;
    })*/
});