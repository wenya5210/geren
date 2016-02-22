$(function(){

//  右边的定位
var itemtext=$(".item_text");
var tabarrow=$(".tab_arrow");
var aaa=$(".aaa");

var a9=$(".a9")[0];

var dingwei=$(".guding")[0];
var ch=document.documentElement.clientHeight;
dingwei.style.height=ch+"px";

var mobile=$(".tab_mobile_pic")[0];
    for (var i = 0; i < aaa.length; i++) {
        aaa[i].index=i;
        hover(aaa[i],function(){
            itemtext[this.index-2].style.display='block';
            itemtext[this.index-2].style.right='35px';
            tabarrow[this.index-2].style.display='block';
        },function(){
            itemtext[this.index-2].style.display='none';
            itemtext[this.index-2].style.right='80px';
            tabarrow[this.index-2].style.display='none';
        })
    }
hover(a9,function(){
    mobile.style.display="block";
},function(){
    mobile.style.display="none";
})







// 下拉菜单


var taobao=$(".taobao");
var taobaoerji=$(".my-hidden");
menulist(taobao,taobaoerji,"a");

var gouwuche=$(".gouwuche");
var gouwucheerji=$(".my-car");
menulist(gouwuche,gouwucheerji,"a");

var shangjia=$(".shangjia");
var shangjiaerji=$(".service-hidden");
menulist(shangjia,shangjiaerji,"div");

var web=$(".web");
var weberji=$(".web-hidden");
menulist(web,weberji,"div");


//  选项卡

// 定义
var onearr=[];
var twoarr=[];
var threearr=[];
var fourarr=[];

var title=$('.guo');    //  获取标题
var a=$('.section2-center');   // 获取 要变化的元素
var huan=$(".huan")[0];     // 换一批

//  保存图片   图片很多  所以要将它遍历
for (var i = 0; i < 55; i++) {
    onearr.push("./image/img/tu-"+i+".jpg");
    twoarr.push("./image/img/tu-"+i+".jpg");
    threearr.push("./image/img/tu-"+i+".jpg");
    fourarr.push("./image/img/tu-"+i+".jpg");
};

//  随机挑选24张图片
function random(arr){
    var newarr=[];   //  存放那取出来的24张图片
    for (var i = 0; i < 24; i++) {
        newarr.push(arr[parseInt(Math.random()*55)]);
    }
    return newarr;      //   因为是个函数  就得返回值
}
// alert(random(onearr));     //  测试是不是获取到图片

//  显示图片
var tuarr=[onearr,twoarr,threearr,fourarr];
function show(num){
    var imgarr=random(tuarr[num]);
    for (var i = 0; i < imgarr.length; i++) {
        var div=document.createElement("div");
        div.style.cssText="width:133px;height:80px;float:left;background:#fff;margin-left:1px;margin-top:1px;text-align:center;line-height:79px;position:relative"
        var img=document.createElement("img");
        img.src=imgarr[i];
        img.className="numdiv";
        img.style.cssText="width:70px;height:50px;vertical-align:middle;";
        var xin = document.createElement("img");
        xin.style.cssText="width:12px;height:11px;position:absolute;z-index:60;right:15px;top:12px;display:none";
        xin.src="./image/xin1.png";
        xin.className="zxin";  
        div.appendChild(img);
        div.appendChild(xin);
        a[num].appendChild(div);
    }
    var numdiv = $(".numdiv");  // 心的效果，在show 方法中运行
    var zxin = $(".zxin");
    for(var i=0;i<numdiv.length;i++){
        numdiv[i].index=i;
        hover(numdiv[i],function(){
            zxin[this.index].style.display="block";
                },function(){
            zxin[this.index].style.display="none";
            });
        } 

}
show(0);

//标题 结合
//  标题有四个  所以得遍历
var index=0;       //  赋一个初始值  为0   意思是  没有之前的单击事件  也让它可以默认的换第一批里面的图片
    for (var i = 0; i < title.length; i++) {
        title[i].index=i;
        title[i].flag=true;
        title[0].flag=false;
        title[i].onclick=function(){
            index=this.index;
            for (var j = 0; j < a.length; j++) {
                a[j].style.zIndex=1;
                // a[i].style.display="none";     //  开始的时候不显示

                // title[i].style.textDecoration="none";
                title[j].style.fontWeight="normal";
                title[j].style.color="#666";
                title[j].style.border="none";
            }
            a[this.index].style.zIndex=3;

            //title[this.index].style.textDecoration="underline";
            title[this.index].style.fontWeight="bold";
            title[this.index].style.color="#000";
            title[this.index].style.borderBottom="2px solid #000";

            if (this.flag) {
                show(this.index);
                this.flag=false;
            }
            
        }
    }

    huan.onclick=function(){
        a[index].innerHTML="";
        show(index);
    }



 // banner轮播 

    var imgs=$(".img");
    var inners=$(".inner");


    var banner=$(".banner")[0];
    var bgarr=["#faa98b","#bb0ff9","#dbdbdb","#fff701"];
    var bannercenter = $(".banner-center")[0];
  //  侧面 对应的
    
    var bannerbox=$(".banner-box")[0];
    var imgboxs=$(".imgbox")[0];
    var bannerimg=$("img",bannerbox);
    var rightimg=$(".banner-right-a");
    var bgarr1=["#dbdbdb","#007DC7","#21e8d1","#ed1113","#01509b","#5e4cdc","#f32a56","#e2d9ba","#262626","#eb4d0e","#ffb9c9","#0f6187","#e86f28","#ffe04a","#c9e1e3"];

   
    // 轮播
    for (var i = 0; i < inners.length; i++) {
    	inners[i].index=i;
    	inners[i].onmouseover=function(){
    		clearInterval(t1);
    		for (var j = 0; j < imgs.length; j++) {
    			imgs[j].style.zIndex=2;
    			inners[j].style.background="#000";
    			inners[j].style.color="#fff";
                banner.style.background=bgarr[j];

    		}
            for (var k = 0; k < rightimg.length; k++) {
                rightimg[k].style.zIndex=2;
                rightimg[k].style.display="none";
            };
            rightimg[this.index].style.zIndex=3;
            rightimg[this.index].style.display="block";

    		imgs[this.index].style.zIndex=3;
    		inners[this.index].style.background="#ccc";
    		inners[this.index].style.color="#000";
            banner.style.background=bgarr[this.index];
    	}
    	// 手控制之后 继续轮播
    	inners[i].onmouseout=function(){
    		t1=setInterval(move,2000);
    		num=this.index+1;
    	}
    }
    // 自动轮播
    var t1=setInterval(move,2000);
    var num=1;
    function move(){
    	if (num==4) {
    		num=0;
    	};
    	for (var i = 0; i < imgs.length; i++) {
    		imgs[i].style.zIndex=2;
    		inners[i].style.background="#000";
    		inners[i].style.color="#fff";

    	}
        for (var k = 0; k < rightimg.length; k++) {
                rightimg[k].style.zIndex=2;
                rightimg[k].style.display="none";
            }
        rightimg[num].style.zIndex=3;
        rightimg[num].style.display="block";

    	imgs[num].style.zIndex=3;
    	inners[num].style.background="#ccc";
    	inners[num].style.color="#000";

        banner.style.background=bgarr[num];
    	num++;
    }
   
//  左侧小轮播
     var leftButton=$(".left1");
        var rightButton=$(".right1");
        var imgDiv=$(".imgbox1");
        for(var i=0;i<leftButton.length;i++){
            nodeLunbo(imgDiv[i],leftButton[i],rightButton[i],120)
        }

//  左侧黑条控制banner图
    
    var bannerleft=$(".banner-left")[0];   // 黑条
    var lis=$(".banner-left-a");  
     var leftbanner=$(".banner-left-con1");      //  Li 
    // alert(bannerimg.length);
    for (var i = 0; i < lis.length; i++) {
        lis[i].index=i;
        hover(lis[i],function(){
            if (this.index==0) {
                bannercenter.style.display="block";
                imgboxs.style.display="block";
                banner.style.background=bgarr[num-1];
                bannerbox.style.display="none";
                for(var i=0;i<leftbanner.length;i++){
                    leftbanner[i].style.display="none";
                } 
                leftbanner[this.index].style.display="none";               
                clearInterval(t1);
                t1=setInterval(move,2000);

            }else{
                clearInterval(t1);
                imgboxs.style.display="none";
                bannerbox.style.display="block";
                for (var j = 0; j < bannerimg.length; j++) {
                    bannerimg[j].style.zIndex=3;
                    banner.style.background=bgarr1[j];
                    leftbanner[j].style.display="none";
                }
                bannerimg[this.index-1].style.zIndex=6;
                banner.style.background=bgarr1[this.index-1];
                leftbanner[this.index-1].style.display="block";
            }
        },function(){   // 离开
            clearInterval(t1);
            for(var i=0;i<leftbanner.length;i++){
                leftbanner[i].style.display="none";
            }             
        })
    }

// 滚动条  出现顶部的搜索框
    var floor=$(".section4");
    var gudingtop=$(".guding-top")[0];
    var leftbtn=$(".fixed-left")[0];
    var xiaobtn=$(".fixed-floor");
    var leftxians=$(".leftfont");
    var flag=true;   //  控制下的开关
    var flag2=true;   // 控制上的开关
    var ch=document.documentElement.clientWidth;
    window.onresize=function(){
    ch=document.documentElement.clientWidth;
    leftbtn.style.left=(ch-1349)/2+"px";
}
    // 滚动条往下拉时的开关，第一次开，这个开关要保证每一次往下拉时，开关都是开着的。
    window.onscroll=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
            var scrollT=obj.scrollTop;
            // document.title=scrollT;  //  滚动条的状态

            if (scrollT>=700) {
                if (flag) {
                    animate(gudingtop,{top:0},500,Tween.Linear);
                        flag=false;  //  第一次往下，执行完成后把开关关掉
                        flag2=true;                    
                }
            }else{  // 往上拉
                if (flag2) {
                    animate(gudingtop,{top:-50},500,Tween.Linear);
                    flag=true;
                    flag2=false;
                };
                   
            }

            //  楼层跳转

            if (scrollT>=1000&&scrollT<=6600) {
                leftbtn.style.display="block";
            }else{
                leftbtn.style.display="none";
            }

            for (var i = 0; i < floor.length; i++) {
                floor[i].cun=floor[i].offsetTop;
                if(scrollT>=(floor[i].cun-300)){
                    for (var j = 0; j < xiaobtn.length; j++) {
                        xiaobtn[j].style.background="";
                        leftxians[j].style.display="none";
                    }
                    xiaobtn[i].style.background="#fff";
                    leftxians[i].style.display="block";
                }
            };


// ***************************************************
            
    // 单击按钮   对应上楼层

            for (var i = 0; i < xiaobtn.length; i++) {
                xiaobtn[i].index=i;
                xiaobtn[i].onclick=function(){
                obj=document.documentElement.scrollTop?document.documentElement:document.body;   
                animate(obj,{scrollTop:floor[this.index].cun},200,Tween.Linear);
                }
                xiaobtn[i].onmouseover=function(){
                   leftxians[this.index].style.display="block";
                }
                xiaobtn[i].onmouseout=function(){
                    leftxians[this.index].style.display="none";
                }
            }    


    //  图片按需加载
            obj=document.documentElement.scrollTop?document.documentElement:document.body;
            for (var i = 0; i < floor.length; i++) {
                if (floor[i].offsetTop<obj.scrollTop+ch-200) {
                    var imgs2=$("img",floor[i]);
                    for (var j = 0; j < imgs2.length; j++) {
                        imgs2[j].src=imgs2[j].getAttribute("aa");
                    };
                };
            }



            //  返回顶部
                var returntop=$(".a10")[0];

                returntop.onclick=function(){
                    obj=document.documentElement.scrollTop?document.documentElement:document.body;
                    animate(obj,{scrollTop:0},400,Tween.Linear);
                }
        }

        
})




