$(function(){
//*******************************************************************************************
//  购物车
	var gouwuche=$("a",$(".gouwuche")[0])[0];
	var car=$(".car",$(".gouwuche")[0])[0];
	gouwuche.onmouseover=function(){
		gouwuche.style.background='#fff';
		car.style.display='block';
	}
	gouwuche.onmouseout=function(){
		gouwuche.style.background='';
		car.style.display='none';
	}


//*******************************************************************************************
//  搜索框
	var logoright=$(".logo-right")[0];
	var sosuo=$(".logo-sousuo",sosuo)[0];
	var input=$("input",logoright)[0];
	var text=$(".text",logoright)[0];
	var anniu1=$("a",text);

	var so=$(".so",logoright)[0];
	input.onfocus=function(){
			if (text.value) {
			};
			anniu1[0].style.display='none';
			anniu1[1].style.display='none';
			text.style.cssText="border:1px solid #FF6700;border-right:0;";
			sosuo.style.cssText='border:1px solid #FF6700;';
			so.style.display='block';
		}
		
	// hover(logoright,function(){
	// 	text.style.cssText="border:1px solid #b0b0b0;border-right:0;";
	// 	sosuo.style.cssText='border:1px solid #b0b0b0;';
	// })

		input.onblur=function(){
			if (input.value) {
				anniu1[0].style.display='none';
				anniu1[1].style.display='none';
			}else{
				input.value='';
				anniu1[0].style.display='block';
				anniu1[1].style.display='block';
			}
			so.style.display='none';	
			text.style.cssText="";
			sosuo.style.cssText='';			
		}


//*******************************************************************************************
//  菜单下拉

	var baohan=$(".baohan",$(".logo-center")[0]);  //  标题
	// alert(baohan.length)
	var xiala=$(".xiala");    //  下拉图片
	// alert(xiala.length)
	var xialaW=$(".xiala-zhong");
	for (var i = 0; i < baohan.length; i++) {
		baohan[i].index=i;
		hover(baohan[i],function(){
			for (var i = 0; i < xiala.length; i++) {
				xiala[i].style.display="none";
			}
			xiala[this.index].style.display="block";
		},function(){
			xiala[this.index].style.display="none";
		})
	};
	/*for (var i = 0; i < baohan.length; i++) {
		baohan[i].index=i;
		hover(baohan[i],function(){
			var h=xialaW[0].offsetHeight;
			xiala[this.index].style.height=0;
			xiala[this.index].style.cssText="border-top: 1px solid #E0E0E0;box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.18);transition: box-shadow 0.2s ease 0s;"
			animate(xiala[this.index],{height:h},100,Tween.Linear);
		},function(){
			animate(xiala[this.index],{height:0},100,Tween.Linear);
			xiala[this.index].style.cssText="";
		})
	}*/
		
//*******************************************************************************************
	// banner轮播
		// 自动轮播

		function indexlun(obj,lists,imgs,len,left,right){
			//  手可以控制的
			for (var i = 0; i < lists.length; i++) {   //  遍历 按钮
				lists[i].index=i;                  //将i 存储 到 index属性中
				lists[i].onmouseover=function(){   //  鼠标滑过事件
					for (var j= 0; j < imgs.length; j++) { 
						clearInterval(t);     //  鼠标划上那个按钮   相对应的图片就要停止  
						imgs[j].style.zIndex=2;                 // 图片的初始层级 为 2
						lists[j].className='';   // 按钮的初始背景就是黑色的
					};	
					imgs[this.index].style.zIndex=3;	  //   当前的图片 层级 要高  3
					lists[this.index].className='as';		
				}

				//   手控制完之后   再自动轮播
				lists[i].onmouseout=function(){   //  鼠标离开的时候  继续滚动
					t=setInterval(move,2000);   // 
					num=this.index+1;          //   鼠标离开以后   从离开的下一按钮开始自动滚动  所以还是给num.
				}			
			}
			// 自动轮播
			var t=setInterval(move,2000);
			var num=0;    //  让 它从第2张图片开始
			function move(){  
			  	num++;   //   按钮 往后
				if (num==imgs.length) {    //   按钮到了4的时候，
					num=0;        //  让它从第1张开始
				}
				for (var i = 0; i < imgs.length; i++) {   // 图片和按钮清除样式
					imgs[i].style.zIndex=2;
					lists[i].className=''; 
				};
				imgs[num].style.zIndex=3;     //   当前的层级设成3   要比别的高
				lists[num].className='as';   //  当前的按钮 要变成灰色的背景
				
			}
			
			right.onmouseover=left.onmouseover=function(){
				clearInterval(t);
			}
			left.onmouseout=right.onmouseout=function(){
				t=setInterval(move,2000);
			}
			right.onclick=function(){
				move();				
			}
			left.onclick=function(){
				num--; 
				if (num==-1) {    //   按钮到了4的时候，
					num=imgs.length-1;        //  让它从第1张开始
				}
				for (var i = 0; i < imgs.length; i++) {   // 图片和按钮清除样式
					imgs[i].style.zIndex=2;
					lists[i].className=''; 
				};
				imgs[num].style.zIndex=3;     //   当前的层级设成3   要比别的高
				lists[num].className='as';   //  当前的按钮 要变成灰色的背景
				
			}
			obj.onmouseover=function(){
				clearInterval(t);
			}
			obj.onmouseout=function(){
				t=setInterval(move,2000);
			}

			}
			var banner=$(".banner")[0];
			var imgs=$("img",banner);
			var left=$(".bannerleft")[0];
			var right=$(".bannerright")[0];
			var lists=$("a",$(".banner-right")[0]);
			indexlun(banner,lists,imgs,5,left,right);

// ******************************************************************************************

var ban=$(".ban",$(".banner-left")[0]);
// alert(ban.length)
var banyi=$(".ban-yi");
// alert(banyi.length)
for (var i = 0; i < ban.length; i++) {
	ban[i].index=i;
	hover(ban[i],function(){
		for (var i = 0; i < banyi.length; i++) {
			banyi[i].style.display='none';
		}
		banyi[this.index].style.display="block";
	},function(){
		banyi[this.index].style.display="none";
	})
};


//*******************************************************************************************
//  选项卡

function xuanka(title,con,you,up1){
	for (var i = 0; i < title.length; i++) {
		title[i].index=i;
		title[i].onmouseover=function(){
			for (var j = 0; j < con.length; j++) {
				title[j].className='';
				con[j].style.display='none';				
			}
			title[this.index].className='section6-a';
			con[this.index].style.display='block';

		}	
	}
	for (var i = 0; i < you.length; i++) {
		you[i].index=i;
		hover(you[i],function(){
			animate(up1[this.index],{height:80},40);
		},function(){
			animate(up1[this.index],{height:0},40);
		})
	}
}
var section6=$(".dp")[0];
var box1=$(".box1")[0];
var title=$("a",section6);
var con=$(".dap");
var up1=$(".up1",box1);
var you=$(".you",box1);

var box2=$(".box2")[0];
var title1=$("a",$(".pei")[0]);
var con1=$(".jian");
var jup1=$(".up1",box2);
var jyou=$(".you",box2);

var box3=$(".box3")[0];
var title2=$("a",$(".zhou")[0]);
var con2=$(".bian");
var jup2=$(".up1",box3);
var jyou2=$(".you",box3);

xuanka(title,con,you,up1);
xuanka(title1,con1,jyou,jup1);
xuanka(title2,con2,jyou2,jup2);


//*********************************************************************************************

//  选项卡的轮播式
	//  第一个 
	var imgbox1=$(".section3")[0];
	var imgs1=$(".section3-zhong");
	var img1W=imgs1[0].offsetWidth;
	// alert(imgW.length)
	var anniu=$(".anniu")[0];  //  按钮
	var lis1=$("a",anniu);
	// alert(anniu)
	var left=$(".left",anniu)[0];
	// alert(left)
	var right=$(".right",anniu)[0];
	// alert(right)
	wufenLunbo(imgbox1,imgs1,lis1,img1W);

	//   第二个
	var imgbox2=$(".zhong7")[0];
	// alert(imgbox2)
	var imgs2=$(".section7-xiao");
	// alert(imgs2.length)
	var img2W=imgs2[0].offsetWidth;
	
	var anniu2=$(".tui")[0];
	var lis2=$("a",anniu2);
	// alert(lis2.length)
	var left=$(".left",anniu2)[0];
	// alert(left)
	var right=$(".right",anniu2)[0];
	// alert(right)
	wufenLunbo(imgbox2,imgs2,lis2,img2W);

	//  函 数
	function wufenLunbo(obj,imgs,lis,imgW){
		
		for (var i = 0; i < imgs.length; i++) {
			if (i!=0) {
				imgs[i].style.left=imgW+"px";
			}
		}

		// 自动轮播
		
		var now=0;  // 当前的下标
		var next=0;  // 下一张图片的下标
		var flag=true;     // 控制动画的    让它执行完之后再操作
		var t=setInterval(move,4000);  //  时间函数
		function move(){    //  时间函数中的回调函数
			if (now==this.index||!flag) {
				return;
			}
			flag=false;
			next++;                 // 下一个下标要自加；
			if (next== imgs.length) {        // 小标长度等于了图片的长度时 ，让它从0 开始继续执行
				next=0;
			}
			imgs[next].style.left=imgW+"px";   // 即将要显示的图片，放到右边  因为它是从右边出来
			animate(imgs[now],{left:-imgW},900);
			animate(imgs[next],{left:0},900,function(){    //  当前在显示框中的图片要向左走
				flag=true;
			});  // 那么下一张图片就得到显示框中，所以left=0；
			lis[now].className='';        //  当前的小图标 清空样式
			lis[next].className='hot';  // 即将显示的 呈现host中存的样式
			now=next;         //  因为下标是随着轮动变化的。也就是说是往前走的  所以就是下一张图片的下标作为显示框图片的下标
			// alert(now);
		}
		obj.onmouseover=function(){
			clearInterval(t);
		}
		obj.onmouseout=function(){
			t=setInterval(move,4000);
		}

		// 单击右面让它移动
		right.onclick=function(){
			move();
		}

    	// 右边为正方向

    	left.onclick=function(){
	       if(now==this.index||!flag){//如果当前的now等于鼠标经过的数或者开关关闭，让他不动，跳出函数
	          return;
	        }
	      flag=false;
	       next--;//上一张图下标  向右走了
	      if(next==-1){//如果到了最后一张的时候
	        next= imgs.length-1;//到了最后一张,下一张图是第一张图
	      }
	      imgs[next].style.left=-imgW+'px';//将下一张图放到左边
	      animate(imgs[now],{left:imgW},900,function(){
	              flag=true;
	            });//当前的图往右移
	      animate(imgs[next],{left:0},900);//将下一张图移到显示区
	      lis[now].className="";//把上一张对应的小按钮回复样式
	      lis[next].className='hot';//下一张图对应的小按钮变样式
	      now=next;//当前显示的就是下一张的
	    }
	}


//*******************************************************************************************	

//  小轮播
//  图示
var obj1=$(".lun")[0];
var lun=$(".section9-a")[0];
var imgs3=$(".m1",lun);
var left3=$(".zuo1")[0];
var right3=$(".you1")[0];
var index=$(".niu1")[0];
var lis3=$("li",index);
var imgW=imgs3[0].offsetWidth;

lunbo(obj1,imgs3,lis3,left3,right3,296);
//  主题
var obj2=$(".lun1")[0];
var lun1=$(".section9-b")[0];
var imgs4=$(".MI",lun1);
var left4=$(".zuo2")[0];
var right4=$(".you2")[0];
var index1=$(".niu2")[0];
var lis4=$("li",index1);
var imgW1=imgs4[0].offsetWidth;

lunbo(obj2,imgs4,lis4,left4,right4,296);

//  游戏
var obj3=$(".lun2")[0];
var lun2=$(".section9-c")[0];
var imgs5=$(".xi",lun2);
var left5=$(".zuo3")[0];
var right5=$(".you3")[0];
var index2=$(".niu3")[0];
var lis5=$("li",index2);
var imgW2=imgs5[0].offsetWidth;

lunbo(obj3,imgs5,lis5,left5,right5,296);

//  应用
var obj4=$(".lun3")[0];
var lun3=$(".section9-d")[0];
var imgs6=$(".ying",lun3);
var left6=$(".zuo4")[0];
var right6=$(".you4")[0];
var index3=$(".niu4")[0];
var lis6=$("li",index3);
var imgW3=imgs6[0].offsetWidth;

lunbo(obj4,imgs6,lis6,left6,right6,296);
//   函 数
		function lunbo(imgbox,imgs,lis,left,right,num){		
			for (var i = 0; i < imgs.length; i++) {
				if (i!=0) {
					imgs[i].style.left=imgW+"px";
				}
			}
			//  单击小图标
			for (var i = 0; i < lis.length; i++) {
			lis[i].index=i;
			lis[i].onclick=function(){    //  给每个小图标添加一个单击事件
				if (now==this.index||!flag) {    // 如果单击的跟现在显示的是同一个是，让它不执行
												 //或者是，开关为 关 着的时候也让它不执行。
					return;
				}
				flag=false;           // 完了之后  关上开关
				var f=1;             //   表示正负号
				if (now<this.index) {  //  如果当前显示的下标  小于 要单击的下标时，
					f=-1;            //  让它变成负的值。
					/*imgs[this.index].style.left=imgW+'px';
					animate(imgs[now],{left:-imgW},800);*/
				}/*else{
					imgs[this.index].style.left=-imgW+'px';
					animate(imgs[now],{left:imgW},800);
				}*/
				animate(imgs[now],{left:f*imgW},800);//  如果当前显示的下标(小于)要单击的下标时，就让下一张图片从右往左走
													 //  (负的)
													   //  如果当前显示的下标(大于)要单击的下标时，就让下一张图片从左往右走
													   //  (正的)
				imgs[this.index].style.left=-f*imgW+"px";   //  下一个就是随着负号的变化而变

				animate(imgs[this.index],{left:0},800,function(){
					flag=true;                         //  动画执行完之后   将开关 开了。
				});
				lis[now].className='';
				this.className='host';				
				next=now=this.index;   //  将点击的小标给了 下一个即将显示的下标
				// next=this.index;
				// animate(imgs[this])
				
			}
		}
			// 单击右面让它移动
			var now=0;  // 当前的下标
			var next=0;  // 下一张图片的下标
			var flag=true;    // 控制动画的    让它执行完之后再操作
			right.onclick=function(){
				if (now==this.index||!flag) {
					return;
				}
				flag=false;
					next++;                 // 下一个下标要自加；
					if (next== imgs.length) {        // 小标长度等于了图片的长度时 ，让它从0 开始继续执行
						next=0;
						// flag=true;
					}
					imgs[next].style.left=imgW+"px";   // 即将要显示的图片，放到右边  因为它是从右边出来
					animate(imgs[now],{left:-imgW},500);
					animate(imgs[next],{left:0},500,function(){    //  当前在显示框中的图片要向左走
						flag=true;
					});  // 那么下一张图片就得到显示框中，所以left=0；
					lis[now].className='';        //  当前的小图标 清空样式
					lis[next].className='host';  // 即将显示的 呈现host中存的样式
					now=next;         //  因为下标是随着轮动变化的。也就是说是往前走的  所以就是下一张图片的下标作为显示框图片的下标
					// alert(now);
				}
	    	// 右边为正方向

	    	left.onclick=function(){
		       if(now==this.index||!flag){//如果当前的now等于鼠标经过的数或者开关关闭，让他不动，跳出函数
		       	return;
		       }
		       flag=true;
		       next--;//上一张图下标  向右走了
		       // alert(next)
		      if(next==-1){//如果到了最后一张的时候
		        next=imgs.length-1;//到了最后一张,下一张图是第一张图
		        // flag=false;
		    }
		      imgs[next].style.left=-imgW+'px';//将下一张图放到左边
		      animate(imgs[now],{left:imgW},500,function(){
		      	flag=true;
		            });//当前的图往右移
		      animate(imgs[next],{left:0},500);//将下一张图移到显示区
		      lis[now].className="";//把上一张对应的小按钮回复样式
		      lis[next].className='host';//下一张图对应的小按钮变样式
		      now=next;//当前显示的就是下一张的
		  }
		  left.onmouseover=right.onmouseover=imgbox.onmouseover=function(){
		  	left.style.opacity=1;
		  	right.style.opacity=1;
		  }
		  left.onmouseout=right.onmouseout=imgbox.onmouseout=function(){
		  	left.style.opacity=0;
		  	right.style.opacity=0;
		  }
		  
		}

			
//*******************************************************************************************






})