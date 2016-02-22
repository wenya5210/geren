$(function () {
    var box=$(".box");
    var copy=$(".copy");
    var canvas=$("canvas");
    var cobj=canvas[0].getContext("2d");
    //  画布的样式
    canvas.attr({
        width:copy.width(),
        height:copy.height()
    });

    //  下拉菜单显示
    $(".hasson").click(function () {
        //$(this).find(".son").finish().slideDown(200);
        $(".left-select").css("display","none").eq($(this).index()).css("display","block");
    });/*, function () {
        //$(this).find(".son").slideUp(200);
    })*/

//    画图功能
   var obj=new shape(copy[0],canvas[0],cobj,$(".area"),$(".xp"));
    //obj.shaps="rect";
    //obj.draw();
    $(".left-select:eq(0)").find("li").click(function () {
            if ($(this).attr("data-role")!="pen"){
                obj.shaps=$(this).attr("data-role");
                obj.draw();
            }else{
                obj.pen();
            }

    });
//    画图方式
    $(".left-select:eq(2)").find("li").click(function () {
        obj.type=$(this).attr("data-role");
    })
//    线条的颜色
    $(".lineColor").change(function(){
        obj.bordercolor=$(this).val();
    })
    //   填充背景颜色
    $(".fillColor input").change(function(){
        obj.bgcolor=$(this).val();
    })
//    线条的样式
    $(".left-select:eq(5)").find("li").click(function () {
        obj.lineWidth=$(this).attr("data-role");
    })

//    xp
    $(".left-select:eq(6)").find("li").click(function () {
        var w=$(this).attr("data-role");
        var h=$(this).attr("data-role");
        $(".xp").css({
            width:w,
            height:h
        });
        obj.xp($(".xp"),w,h);
    })


    //file
    $(".left-select:eq(1)").find("li").click(function () {
        var index=$(this).index(".left-select:eq(1) li");
        if (index==0){
            if (obj.history.length>0){
                var yes=window.confirm("是否要保存");
                if (yes){  //  保存
                    //data:strem/octect;
                    location.href=(canvas[0].toDataURL().replace("data:image/png","data:stream/octet"));
                }else{
                    obj.history=[];
                    cobj.clearRect(0,0,canvas[0].width,canvas[0].height);
                }
            }
        }else if(index==1){
            location.href=(canvas[0].toDataURL().replace("data:image/png","data:stream/octet"));
        }else if(index==2){
            cobj.clearRect(0,0,canvas[0].width,canvas[0].height);
            if (obj.history.length==0){
                alert("不能后退");
                return;
            }
            var last=obj.history.pop();
            obj.cobj.putImageData(last,0,0);
        }
    })
    
//    选择
    $(".select").click(function () {
        //$(".area").css("display","block");
        obj.select($(".area"));
    });
// 颜色
    $(".hua li").click(function () {
        obj.bgcolor=$(this).attr("color");
        console.log(obj.bgcolor);
        obj.bordercolor=$(this).attr("color");
    })


})