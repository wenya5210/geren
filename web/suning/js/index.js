$(function(){
//图片按需加载
	var louceng1=$('.louceng1');
	for(var i=0;i<louceng1.length;i++){
		var limg=$('img',louceng1[i]);
		for(var j=0;j<limg.length;j++){
			var val=limg[j].getAttribute('src');
			limg[j].setAttribute('aa',val);
			limg[j].setAttribute('src','');
		}
	}
	//加载图片在window.onscroll中



//顶部下拉菜单
	var yiji=getClass("yiji");
	var erji=getClass("erji");
	var libg=getClass("navibg");
	// var libg2=getClass("support")[3];
	//var wnm=getClass("web-navi-menu")[0];

	for(var i=0;i<yiji.length;i++){
		yiji[i].index=i;
		yiji[i].onmouseover=function(e){
			var ev=e||window.event;

			var sons=$(".erjidiv",erji[this.index]);
			var h=sons[0].offsetHeight;
			
			libg[this.index].style.backgroundColor="white";
			//erji[this.index].style.height=0;
			animate(erji[this.index],{height:h*sons.length},200,Tween.Linear);
			// erji[this.index].style.height=h*sons.length+"px";
		

		}

		yiji[i].onmouseout=function(){
			libg[this.index].style.backgroundColor="#f5f5f5";

			erji[this.index].style.borderTop="white";	
			animate(erji[this.index],{height:0},100,Tween.Linear);


		}
	}


//右侧侧栏
	var sidebarrighticon=$(".sidebar-over-icon");
	var sidebarrightmove=$(".sidebar-over-move");
	for(var i=0;i<sidebarrighticon.length;i++){
		sidebarrighticon[i].index=i;
		sidebarrighticon[i].onmouseover=function(){
			animate(sidebarrightmove[this.index],{width:53},200,Tween.Linear);			
		}
		sidebarrighticon[i].onmouseout=function(){	
			animate(sidebarrightmove[this.index],{width:0},200,Tween.Linear);			
		}
	}

	var iconerweima=$(".icon-erweima")[0];
	var erweimamove=$(".erweima-move")[0];
	iconerweima.onmouseover=function(){
		animate(erweimamove,{width:131},200,Tween.Linear);			
	}
	iconerweima.onmouseout=function(){
		animate(erweimamove,{width:0},200,Tween.Linear);			
	}


//点击搜索框下拉内容
	
	var searchinput=$(".search-text-input")[0];
	var searchxiala=$(".search-xiala")[0];
	searchinput.onclick=function(){
		searchxiala.style.display="block";
	}
	var searchclose=$(".search-close")[0];
	searchclose.onclick=function(){
		searchxiala.style.display="none";

	}
	searchinput.onblur=function(){
		searchxiala.style.display="none";
	}


//网页导航关闭功能
	var close=$(".page-navi-con-close")[0];
	close.onclick=function(){
		erji[0].style.height=0;
	}
//手机苏宁关闭功能
	var close=$(".shouji-close")[0];
	close.onclick=function(){
		erji[3].style.height=0;
	}

//楼层选项卡
	var tabcon=$(".louceng-tab");
	for(var i=0;i<tabcon.length;i++){
		if(i%2==0){
			tabcon[i].style.display="block";
		}else{
			tabcon[i].style.display="none";
		}
	}

	function tab(btn,tab,color){
		
		for(var i=0;i<btn.length;i++){
			btn[i].index=i;
			btn[i].onmouseover=function(){
				// alert(this.index);
				for(var j=0;j<tab.length;j++){
					tab[j].style.display="none";
					btn[j].style.cssText="border:0px;"
				}
				tab[this.index].style.display="block";
				btn[this.index].style.cssText="border:2px solid "+color+";border-bottom: 2px solid white;"

			}
		}
	}
	
	//1F
	var btn1=$(".btnli1");
	var tab1=$(".louceng-tab1");
	tab(btn1,tab1,"rgb(225,107,126)");
	//2F
	var btn2=$(".btnli2");
	var tab2=$(".louceng-tab2");
	tab(btn2,tab2,"rgb(126, 177, 252)");
	//3F
	var btn3=$(".btnli3");
	var tab3=$(".louceng-tab3");
	tab(btn3,tab3,"rgb(185, 211, 99)");
	//4F
	var btn4=$(".btnli4");
	var tab4=$(".louceng-tab4");
	tab(btn4,tab4,"rgb(231, 151, 36)");
	//5F
	var btn5=$(".btnli5");
	var tab5=$(".louceng-tab5");
	tab(btn5,tab5,"rgb(224, 101, 101)");
	//6F
	var btn6=$(".btnli6");
	var tab6=$(".louceng-tab6");
	tab(btn6,tab6,"rgb(222, 114, 144)");
	//7F
	var btn7=$(".btnli7");
	var tab7=$(".louceng-tab7");
	tab(btn7,tab7,"rgb(121, 146, 252)");
	//8F
	var btn8=$(".btnli8");
	var tab8=$(".louceng-tab8");
	tab(btn8,tab8,"rgb(74, 106, 199)");
	//9F
	var btn9=$(".btnli9");
	var tab9=$(".louceng-tab9");
	tab(btn9,tab9,"rgb(144, 185, 63)");
	//10F
	var btn10=$(".btnli10");
	var tab10=$(".louceng-tab10");
	tab(btn10,tab10,"rgb(144, 101, 51)");

	var side=getClass("louceng-num");
	var floor=getClass("louceng1");
	var sidefixed=getClass("fixed-louceng-display")[0];

//banner侧栏鼠标经过文字变色，显示内容
	var bannerlist=$(".banner-list")[1];
	var bannerlist2=$(".top-fixed-list")[0];
	var bannerlistcon=$(".banner-list-con");
	var bannerlistcon2=$(".top-banner-list-con");
	
	banner(bannerlist,bannerlistcon);
	topbanner(bannerlist2,bannerlistcon2);
	function banner(box,con){
		var li=$("li",box);
		for(var i=0;i<li.length;i++){
			li[i].index=i;
			li[i].onmouseover=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="black";
					
					con[j].style.display="none";
				}
				con[this.index].style.display="block";
				li[this.index].style.backgroundColor="white";
			}
			li[i].onmouseout=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="white";

				}
				con[this.index].style.display="none";
				li[this.index].style.backgroundColor="rgb(47,47,47)";

			}

			con[i].index=i;
			con[i].onmouseover=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="black";
				}
				con[this.index].style.display="block";
				li[this.index].style.backgroundColor="white";				
			}
			con[i].onmouseout=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="white";
				}
				con[this.index].style.display="none";	
				li[this.index].style.backgroundColor="rgb(47,47,47)";						
			}
			
		}
	}
	function topbanner(box,con){
		var li=$("li",box);
		for(var i=0;i<li.length;i++){
			li[i].index=i;
			li[i].onmouseover=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="black";
					
					con[j].style.display="none";
				}
				con[this.index].style.display="block";
				li[this.index].style.backgroundColor="white";
			}
			li[i].onmouseout=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="white";

				}
				con[this.index].style.display="none";
				li[this.index].style.backgroundColor="rgb(47,47,47)";

			}

			con[i].index=i;
			con[i].onmouseover=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="black";
				}
				con[this.index].style.display="block";
				li[this.index].style.backgroundColor="white";	
				box.style.display="block";
				animate(box,{height:450},200,Tween.Linear);			
			}
			con[i].onmouseout=function(){
				var aa=$("a",li[this.index]);
				for(var j=0;j<aa.length;j++){
					aa[j].style.color="white";
				}
				con[this.index].style.display="none";	
				li[this.index].style.backgroundColor="rgb(47,47,47)";

				animate(box,{height:0},200,Tween.Linear);						
			}
			
		}
	}

//关闭banner侧栏显示内容
	var topbannerclose=$(".top-banner-list-con-close");
	var bannerclose=$(".banner-list-con-close");

	for(var i=0;i<bannerclose.length;i++){
		bannerclose[i].index=i;
		bannerclose[i].onclick=function(){			
			bannerlistcon[this.index].style.display="none";		
		}
	}
	for(var i=0;i<topbannerclose.length;i++){
		topbannerclose[i].index=i;
		topbannerclose[i].onclick=function(){			
			bannerlistcon2[this.index].style.display="none";		
		}
	}
	
//banner
	var bannermiddle=$(".banner-middle")[0];
	var banner1=$("img",bannermiddle);

	var ulbg=$(".ulbg")[0];
	var num=$("li",ulbg);
	var bg=$(".libg");
	var bg2=$(".bg2");

	var bannerw=banner1[0].offsetWidth;

	var bannerulNum=$(".bannerul-num");
	var bannerulCon=$(".bannerul-con");
	var bannerbg=$(".banner")[0];

	var bannerulCona=$(".bannerul-con-a");
	var conAcon=$(".con-a-con");

	var bannerColor=['#ff2045','#ee2507','#ef0f17','#f53d9f','#ea0047','#0188fe','#fa25a1','#e8101d','#ff6b09','#e32622','#6f00ff','#f23a3a','#7300cb','#ff5f0b','#fd0a42','#de0730','#fe7b21','#f00e00'];

	banner1[0].style.left=0+'px';
	bg[0].style.backgroundColor="#ff6700";
	bg[0].style.display="block";
	num[0].style.backgroundColor="rgba(0,0,0,0.7)";

	bannerulNum[0].style.top=-13+"px";
	bannerulNum[0].style.display="block";

	for(var i=1;i<bannerulNum.length;i++){
		bannerulNum[i].style.display="none";
	}
	for(var i=1;i<bg.length;i++){
		bg[i].style.display="none";
	}

	var nowb=0;
	var nextb=0;

	var nowNum=0;
	var nextNum=0;

	//自动轮播
	var t=setInterval(move,1000);
	function move(){

		nextb++;
		bannerbg.style.backgroundColor=bannerColor[nextb];
		if(nextb==18){
			nextb=0;
		}

		banner1[nowb].style.left=bannerw+"px";
		banner1[nextb].style.left=0+"px";
		bg[nowb].style.backgroundColor="";
		
		bg[nextb].style.backgroundColor="#ff6700";
		
		if(getDown(bg[nowb]).nodeType==undefined){
			nextNum++;
			if(nextNum==11){
				nextNum=0;
			}
			
			num[nowNum].style.backgroundColor="";
			num[nextNum].style.backgroundColor="rgba(0,0,0,0.7)";
			bannerulNum[nowNum].style.top=1+"px";
			bannerulNum[nowNum].style.display="none";
			for(var i=0;i<getChilds(num[nowNum]).length;i++){
				getChilds(num[nowNum])[i].style.display="none";
			}
			

			bannerulNum[nextNum].style.top=-13+"px";
			bannerulNum[nextNum].style.display="block";
			for(var i=0;i<getChilds(num[nextNum]).length;i++){
				getChilds(num[nextNum])[i].style.display="block";
			}
			nowNum=nextNum;
		}
		
		nowb=nextb;	
	}

	//鼠标划上链接区域
	for(var i=0;i<bannerulCon.length;i++){
		bannerulCon[i].index=i;
		bannerulCon[i].onmouseover=function(){
			clearInterval(t);
			for(var k=0;k<bg.length;k++){
				bg[k].style.backgroundColor="white";
				bg[k].style.display="none";
				//bg2[k].style.backgroundColor="white";
			}
			//getFirstChild(bannerulCon[this.index]).style.backgroundColor="rgb(255,103,0)";

			bannerulNum[this.index].style.display="none";
			bannerulCon[this.index].style.display="block";
					
		}
		bannerulCon[i].onmouseout=function(){
			for(var i=0;i<getChilds(num[this.index]).length;i++){
	 			getChilds(num[this.index])[i].style.display="block";
			}

			getFirstChild(num[this.index]).style.backgroundColor="rgb(255,103,0)";
			bannerulNum[this.index].style.display="block";
			bannerulCon[this.index].style.display="none";
			nowNum=nextNum=this.index;
			t=setInterval(move,1000);
		}
	}

	//鼠标划上链接
	for(var j=0;j<conAcon.length;j++){
		conAcon[j].index=j;
		conAcon[j].onmouseover=function(){
			
			for(var k=0;k<bg2.length;k++){

				bg2[k].style.backgroundColor="white";
				banner1[k].style.left=bannerw+"px";
			}
			bg2[this.index].style.backgroundColor="rgb(255,103,0)";
			banner1[this.index].style.left=0+"px";
			bannerbg.style.background=bannerColor[this.index];

		}
		// conAcon[j].onmouseout=function(){
			
		// 	for(var i=0;i<bg.length;i++){
		// 		bg[i].style.backgroundColor="white";
		// 	}
		// 	bg[this.index].style.backgroundColor="rgb(255,103,0)";
		// }
		bg2[j].index=j;
		bg2[j].onmouseover=function(){
			
			for(var k=0;k<bg2.length;k++){

				bg2[k].style.backgroundColor="white";
				banner1[k].style.left=bannerw+"px";
			}
			bg2[this.index].style.backgroundColor="rgb(255,103,0)";
			banner1[this.index].style.left=0+"px";
			bannerbg.style.background=bannerColor[this.index];

		}
		// bg2[j].onmouseout=function(){
			
		// 	for(var i=0;i<bg.length;i++){
		// 		bg[i].style.backgroundColor="white";
		// 	}
		// 	bg[this.index].style.backgroundColor="rgb(255,103,0)";
		// }
	}
	
	//鼠标划上选项卡
	for(var i=0;i<num.length;i++){
		num[i].index=i;
		num[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0;j<num.length;j++){
				num[j].style.backgroundColor="";
				
				bannerulNum[j].style.display="none";
				bannerulCon[j].style.display="none";
				for(var k=0;k<bg.length;k++){
					bg[k].style.backgroundColor="white";
					bg[k].style.display="none";
					bg2[k].style.backgroundColor="white";
					banner1[k].style.left=bannerw+"px";
				}
			}

			num[this.index].style.backgroundColor="rgba(0,0,0,0.7)";
			// bannerulNum[this.index].style.width=200+'px';
			// bannerulNum[this.index].style.height=48+'px';

			
			bannerulCon[this.index].style.display="block";

			getFirstChild(num[this.index]).style.backgroundColor="rgb(255,103,0)";
			getFirstChild(bannerulCon[this.index]).style.backgroundColor="rgb(255,103,0)";

			
		
			for(var l=0;l<bg.length;l++){
				if(bg[l].style.backgroundColor!="white"){
	 				banner1[l].style.left=0+"px";
	 				bannerbg.style.backgroundColor=bannerColor[l];
	 				nextb=nowb=l;
	 			}
			}

		}
		num[i].onmouseout=function(){
			for(var i=0;i<getChilds(num[this.index]).length;i++){
	 			getChilds(num[this.index])[i].style.display="block";
			}
		
			bannerulNum[this.index].style.display="block";
			bannerulNum[this.index].style.top=-13+"px";
			bannerulCon[this.index].style.display="none";
			nowNum=nextNum=this.index;
			t=setInterval(move,1000);
		}
	}

	//左右
	var bannerleft=$('.jiantou1')[0];
	var bannerright=$('.jiantou2')[0];
	var bannerM=$(".banner-middle")[0];

	bannerleft.onmouseover=bannerright.onmouseover=function(){
		clearInterval(t);
	}
	bannerright.onclick=function(){

		move();
	}
	bannerleft.onclick=function(){
		nextb--;
		if(nextb==-1){
			nextb=17;
		}
		bannerbg.style.backgroundColor=bannerColor[nextb];
		banner1[nowb].style.left=bannerw+"px";
		banner1[nextb].style.left=0+"px";
		bg[nowb].style.backgroundColor="";
		
		bg[nextb].style.backgroundColor="#ff6700";
		
		if(getUp(bg[nowb]).nodeType==undefined){
			nextNum--;
			if(nextNum==-1){
				nextNum=10;
			}
			
			num[nowNum].style.backgroundColor="";
			num[nextNum].style.backgroundColor="rgba(0,0,0,0.7)";
			bannerulNum[nowNum].style.top=1+"px";
			bannerulNum[nowNum].style.display="none";
			for(var i=0;i<getChilds(num[nowNum]).length;i++){
				getChilds(num[nowNum])[i].style.display="none";
			}
			

			bannerulNum[nextNum].style.top=-13+"px";
			bannerulNum[nextNum].style.display="block";
			for(var i=0;i<getChilds(num[nextNum]).length;i++){
				getChilds(num[nextNum])[i].style.display="block";
			}
			nowNum=nextNum;
		}
		
		nowb=nextb;
	}
	bannerleft.onmouseout=bannerright.onmouseout=function(){
		t=setInterval(move,1000);
	}


//顶部固定栏下拉菜单
 
	var toplist=$(".top-fixed-list")[0];
	var topleft=$(".top-left")[0];
	toplist.onmouseover=topleft.onmouseover=function(){
		toplist.style.display="block";
		animate(toplist,{height:450},200,Tween.Linear);

	}
	toplist.onmouseout=topleft.onmouseout=function(){
		// toplist.style.display="none";
		animate(toplist,{height:0},200,Tween.Linear);

	}
//顶部固定栏搜索下拉内容
	var searchinput2=$(".top-search-input")[0];
	var searchxiala2=$(".top-search-xiala")[0];
	searchinput2.onclick=function(){
		searchxiala2.style.display="block";
	}
	searchinput2.onblur=function(){
		searchxiala2.style.display="none";
	}
	var searchclose2=$(".top-search-close")[0];
	searchclose2.onclick=function(){
		searchxiala2.style.display="none";

	}
	
	// var clienth0=document.documentElement.clientHeight;
	// var sidebarr=$('.sidebar-right')[0];
	// sidebar.style.height=clienth0+'px';
	

window.onscroll=function(){
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	var clienth=document.documentElement.clientHeight;
//楼层跳转
		//通过滚动条控制侧栏
		if(obj.scrollTop>=1200 && obj.scrollTop<=6400){
				sidefixed.style.display="block";
			}else{
				sidefixed.style.display="none";
		}

		for(var i=0;i<side.length;i++){			
			//offsetTop 自身到body顶部的距离			
			if(obj.scrollTop>=(floor[i].offsetTop-300)){
				//
				for(var j=0;j<side.length;j++){
					side[j].style.background="rgb(102,102,102)";
					side[j].style.color="white";
				}
				side[i].style.background="rgb(234,168,39)";
				side[i].style.color="white";
			}
		}

		//通过侧栏控制滚动条
		for(var i=0;i<side.length;i++){
			side[i].index=i;
			side[i].onclick=function(){
				// obj.scrollTop=floor[this.index].offsetTop-150;
				animate(obj,{scrollTop:floor[this.index].offsetTop-150},200,Tween.Linear);
			}

		}

//顶部固定搜索框	

		var top=getClass("top-fixed")[0];
		var flag=true;//滚动条往下拉时的开关，鼠标指针往下拉的过程中顶部搜索出现，第一次开
		var flag2=true;//滚动条往上拉时的开关
		if(obj.scrollTop>=180){
			if(flag){ 
			animate(top,{top:0},200,Tween.Linear);
				flag=false;//先关掉开关，往上拉时再打开，保证再下一次往下拉的过程中出现顶部搜索框
				flag2=true;
			}
			// top.style.display="block";
			
		}
		if(obj.scrollTop<180){
			// top.style.display="none";
			if(flag2){
				animate(top,{top:-70},200,Tween.Linear);
				flag=true; //打开开关，下一次向下滑动出现顶部搜索框
				flag2=false;
			}
			bannerlist2.style.height=0;
		}
	
//图片按需加载

	

	for(var i=0;i<louceng1.length;i++){
		if(louceng1[i].offsetTop<obj.scrollTop+clienth){
			var imgl=$('img',louceng1[i]);
			for(var j=0;j<imgl.length;j++){
				imgl[j].src=imgl[j].getAttribute('aa');
			}
		}
	}
//回到顶部
	var top=$(".icon-top")[0];
	
	var html=$("html")[0];
	top.onclick=function(){
		if(obj.scrollTop!=0){
			animate(obj,{scrollTop:0},500,Tween.Linear);
		}
	
	}

}

//社区轮播
	var imgs=$(".shequ-banner");
	var indexs=$(".lunbonum");
	var banner=$(".shequ-banner-box")[0];
	var right=$(".shequjiantou-right")[0];
	var left=$(".shequjiantou-left")[0];
	var imgW=imgs[0].offsetWidth;
	var len=imgs.length;

	for(var i=0;i<len;i++){
		if(i!=0){
			imgs[i].style.left=imgW+"px";//把除第一个外的其他图放到窗口的右侧
		}
	}

	var now=0;//当前下标
	var next=0;//下一张下标
	var flag=true;//打开开关，为true
	function autoMove(){
		if(!flag){
			return
		}
		next++;//自加，同时控制0和1两张图，使两张图一起轮播
		if(next==len){ //当next值与len值相等时，轮播从头开始
			next=0;
		}
		
		flag=false;
		imgs[next].style.left=imgW+"px";//把接下来的一张图放到窗口右面，保持轮播时从右向左
		animate(imgs[now],{left:-imgW},300);
		animate(imgs[next],{left:0},300,Tween.linear,function(){
			flag=true;
		});
		indexs[now].style.backgroundColor="rgb(255,255,255)";//当前按钮变化消失
		indexs[next].style.backgroundColor="rgb(234,168,39)";//下一个按钮变化出现
		now=next;//把第一次轮播后的第二张图的next值给now，使第二张图成为下一次轮播的第一张

	}

	var ilen=indexs.length;
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onmouseover=function(){//给每一个按钮添加点击事件
			if(now==this.index||!flag){//当当前图片与点击按钮的顺序相同时，跳出函数，防止当前图片来回轮播
				return;         //开关只有关闭为false时才不会跳出函数，若保持开关打开就会跳出函数
			}
			flag=false;//关闭开关
			if(now<this.index){//当当前图片顺序小于点击按钮的顺序，使按钮对应的图片从右向左轮播
				imgs[this.index].style.left=imgW+"px";//按钮对应的图片到窗口右侧，准备从右向左轮播
				animate(imgs[now],{left:-imgW},300);//当前图片向左移动
			}else{//当当前图片顺序大于点击按钮的顺序，使按钮对应的图片从左向右轮播
				imgs[this.index].style.left=-imgW+"px";//按钮对应的图片到窗口左侧，准备从左向右轮播
				animate(imgs[now],{left:imgW},300);//当前图片向右移动
			}
			animate(imgs[this.index],{left:0},300,Tween.linear,function(){//按钮对应的图片移动到窗口中
				flag=true;
			});
			indexs[now].style.backgroundColor="rgb(255,255,255)";//当前图片对应按钮变化消失
			this.style.backgroundColor="rgb(234,168,39)";//点击的按钮变化出现
			next=now=this.index;//将当前点击按钮对应的图片 成为下一次点击按钮时的当前图片
			//给next赋值this.index，保证从当前点击位置继续轮播
			
		}
	}

	right.onclick=function(){
		autoMove();	
	}
	left.onclick=function(){
		if(!flag){
			return
		}
		next--;//自加，同时控制0和1两张图，使两张图一起轮播
		if(next==-1){ //当next值与len值相等时，轮播从头开始
			next=len-1;
		}
		
		flag=false;
		imgs[next].style.left=-imgW+"px";//把接下来的一张图放到窗口右面，保持轮播时从右向左
		animate(imgs[now],{left:imgW},300);
		animate(imgs[next],{left:0},300,Tween.linear,function(){
			flag=true;
		});
		indexs[now].style.backgroundColor="rgb(255,255,255)";//当前按钮变化消失
		indexs[next].style.backgroundColor="rgb(234,168,39)";//下一个按钮变化出现
		now=next;//把第一次轮播后的第二张图的next值给now，使第二张图成为下一次轮播的第一张
	}



})