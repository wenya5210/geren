function game(){
  // 游戏中可能会用到的属性

  // 首先获取浏览器的宽度和高度
 this.clientw=document.documentElement.clientWidth;
 this.clienth=document.documentElement.clientHeight;
 //  显示的字母  储存在数组中
 this.letterArr=[{url:"img/A.png",zi:"A"},{url:"img/B.png",zi:"B"},{url:"img/C.png",zi:"C"},{url:"img/D.png",zi:"D"},{url:"img/E.png",zi:"E"},{url:"img/F.png",zi:"F"},{url:"img/G.png",zi:"G"},{url:"img/H.png",zi:"H"},{url:"img/I.png",zi:"I"},{url:"img/J.png",zi:"J"},{url:"img/K.png",zi:"K"},{url:"img/L.png",zi:"L"},{url:"img/M.png",zi:"M"},{url:"img/N.png",zi:"N"},{url:"img/O.png",zi:"O"},{url:"img/P.png",zi:"P"},{url:"img/Q.png",zi:"Q"},{url:"img/R.png",zi:"R"},{url:"img/S.png",zi:"S"},{url:"img/T.png",zi:"T"},{url:"img/U.png",zi:"U"},{url:"img/V.png",zi:"V"},{url:"img/W.png",zi:"W"},{url:"img/X.png",zi:"X"},{url:"img/Y.png",zi:"Y"},{url:"img/Z.png",zi:"Z"}];
 //  依次显示的字母的个数
 this.letterLen=5;
 //  字母 下落的速度
 this.speed=2;
 //  存储创建的span  因为要控制字母   只能放到元素中
 this.spans=[];
 // 当前已有的数组
 this.currArr=[];
 //  当前位置的数组
 this.currPosArr=[];
 //  给个生命值
 this.die=10;
 //  分数计数器
 this.sore=0;
 //this.step=1;//关卡数
 this.currSore=0;
 // 记录
 this.num+=10;
 //  生命值和分数显示到 对应的span的标签中   所以需要获取
 this.soreEle=document.getElementsByClassName("sore")[0].getElementsByTagName("span")[1];
 this.dieEle=document.getElementsByClassName("die")[0].getElementsByTagName("span")[1];

 //  关卡
 this.aa=1;
}
game.prototype={
   play:function(){
       //将字母显示到body里面
       this.getLetter(this.letterLen);   // 用getLetter()方法
       this.move();
       this.key();
   },
    key:function(){
      var that=this;  // 保存this指向
      document.onkeydown=function(e){  // 键盘事件
          var ev=e||window.event;
          var code=String.fromCharCode(ev.keyCode);  //  键盘的按键是多少  并将其转换成字母
          var img=document.getElementById("img");
          var shu=document.getElementById("shu");
          var zuan=document.getElementById("zuan");
          var guan=document.getElementById("guan").getElementsByTagName("span")[0];

          for(var i=0;i<that.spans.length;i++){    // 循环字母

              if(that.spans[i].getAttribute("zi")==code){   //  如果按的与 出现的一致
                  document.body.removeChild(that.spans[i]); //  删除了这个元素
                  that.spans.splice(i,1);   // 在页面中删除
                  that.currArr.splice(i,1);  // 当前的字母删除
                  that.currPosArr.splice(i,1); //  位置也删除
                  that.getLetter(1);    //  创建一个新的
                  that.sore++;     // 就让分数值递加
                  that.currSore++;  // 当前这一关应该过了多少
                  that.soreEle.innerHTML=that.sore;    //  并显示在对应得容器soreEle 
                  if(that.currSore%that.num==0){   //   如果分数和步数求余等于0的话  表示错误率为0

                      that.aa++;  // 通关
                      animate(img,{opacity:1},1500);
                      img.style.display="block";
                      that.stop();
                      shu.innerHTML=that.sore;
                      zuan.innerHTML=that.sore/5;
                      guan.innerHTML=that.aa;
                      //alert("第"+that.aa+"关");  // 弹出第几关
                      //that.next();

                  }
                  //  为了执行出现的和消失的一样  需要循环一次后退出
                  break;
              }
          }
      }
    },
    stop: function () {
        clearInterval(this.t);
    },
    //  next 的方法
    next:function(){   //  下一关
      clearInterval(this.t);
      for(var i=0;i<this.spans.length;i++){
         document.body.removeChild(this.spans[i]);
      }
        this.spans=[];
        this.currArr=[];
        this.currPosArr=[];
        this.speed++;  //  每关速度递加   要判断速度不能超过多少
        this.letterLen++;  // 显示字母的个数++
        this.currSore=0;  // 分数变成0
        this.num+=10;  //  每关数量加10
        this.play();
    },
    move:function(){
       var that=this;
       that.t=setInterval(function(){
         for(var i=0;i<that.spans.length;i++){  // 判断是否跑出边界
             var top=that.spans[i].offsetTop+that.speed;  // 当前的高度+ 速度
             that.spans[i].style.top=top+"px";
             if(top>that.clienth){ // 如果大于了浏览器的高
                 document.body.removeChild(that.spans[i]);  // 就删除元素
                 that.spans.splice(i,1);   
                 that.currArr.splice(i,1);  // 当前的字母删除
                 that.currPosArr.splice(i,1); //  位置也删除
                 that.getLetter(1);  // 创建
                 that.die--; // 生命值--
                 that.dieEle.innerHTML=that.die;   // 并显示在记录生命值的的容器中
                 if(that.die==0){   // 生命值为0 的时候
                    var yes = confirm("game over!请重新开始");   // 游戏结束
                     if (yes){
                         location.reload();
                     }else{
                         window.close();
                     }
                     //that.resert();  // 重新开始  用resert()方法
                     // location.reload();
                 }
             }
         }

       },60)
    },

    // resert() 方法:  游戏重新开始
    resert:function(){
      clearInterval(this.t);  // 时间清除
      for(var i=0;i<this.spans.length;i++){
         document.body.removeChild(this.spans[i]);
      }
        this.spans=[];
        this.currArr=[];
        this.currPosArr=[];
        this.speed=3;  //  每关速度递加   要判断速度不能超过多少
        this.letterLen=5;  //  显示5个    表示从第一关开始
        this.currSore=0;
        this.num=10;  //  每关数量加10
        this.die=10;  // 生命值为10
        this.sore=0;
        this.play();
    },
    //  getLetter 方法：
    getLetter:function(num){
        //先获取到指定的字母
        var arr=this.getRand(num);  //  字母要随机取出  用到getRand方法
        var posArr=[];   // 位置 数组
        var currPosArr=[];
        for(var i=0;i<arr.length;i++){
            var span=document.createElement("img");  //  创建span元素
            span.setAttribute("src",arr[i].url);
            span.setAttribute("zi",arr[i].zi);
            //span.=arr[i].url;  // 将字母放到span中

            var x=(100+(this.clientw-200)*Math.random());  // 水平边界
            var y=(100*Math.random());    //  垂直边界
            var width=40;    //  给个固定宽度
            while (this.check1(currPosArr,x,width)){
                x=(100+(this.clientw-200)*Math.random());
            }
             posArr.push({minx:x,maxx:x+width});
             this.currPosArr.push({minx:x,maxx:x+width});
            span.style.cssText="width:"+width+"px;position:absolute;left:"+x+"px;top:"+y+"px;color:#fff;";
            document.body.appendChild(span);
           // eleArr.push(span);
            this.spans.push(span);
        }
       // return eleArr;

    },
    check1:function(arr,x,width){
        for(var i=0;i<arr.length;i++){
            if(!(x+width<arr[i].minx||arr[i].maxx+width<x)){
                return true;
            }
        }
        return false;
    },
    // getRand  方法：
    getRand:function(num){
      //  记录一次性创建出来的元素
       var arr=[];
       for(var i=0;i<num;i++) {  // 循环下标   不能有重复的
           var rand = Math.floor(this.letterArr.length * Math.random());
           while(this.check(arr,this.letterArr[rand])){
               rand = Math.floor(this.letterArr.length * Math.random());
           }
           arr.push(this.letterArr[rand]);
           // 放页面当中
           this.currArr.push(this.letterArr[rand]);
       }

        return arr;

    },

    check:function(arr,val){
       for(var i=0;i<arr.length;i++){
           if(arr[i]==val){
               return true;
           }
       }
        return false;
    }

//     失败反馈







};