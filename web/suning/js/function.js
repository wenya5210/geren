//1.IE8获取class name的兼容函数
	//classname 子元素的类名，加引号
	//obj 父元素类名
	function getClass(classname,obj){
		var obj=obj || document;//只要有一个为真就为真
		//如果obj存在，就赋值给声明的obj，如果不存在，将document赋值给objs
		if (obj.getElementsByClassName) {//为真时表示现代浏览器 w3c
			return obj.getElementsByClassName(classname); //直接返回结果
		}else{ //为假时表示是IE8
			var alls=obj.getElementsByTagName("*"); //获取所有tag标签元素
			var arr=[];
			for(var i=0;i<alls.length;i++){ //遍历alls集合


				if( checkClass(alls[i].className,classname) ){//每一个元素的classname属性与传进来的参数做判断
					arr.push(alls[i]); // 为真，保存在数组中
				}
			}
			return arr; // 数组返回，表示找到了
		}
	}

	

	//查找类名 检测一个元素里是否有我们想要找的类名
	function checkClass(str,classname){ //检测一个元素里是否有我们想要找的类名
		var newarr=str.split(" "); //将元素的类名（字符串）中的空格分割成数组
		for(var i=0;i<newarr.length;i++){ //遍历这个数组，将数组中的每一个值与classname比较，若相同，这个函数返回真
			if(newarr[i]==classname){
				return true;
			}
		}
		return false; //等这个数组遍历完成后，如果还没有找到相同的类名，则返回假
	}


//*********************************************************************************************

//2.获取与设置对象的纯文本的兼容函数
	//FF obj.textContent
	//IE obj.innerText
	//obj 从哪个对象里获取纯文本
	//val 要设置的文本
	function getText(obj,val){
		if(val==undefined){ //获取
			if(obj.textContent){ //为真，表示是w3c浏览器
				return obj.textContent; 
			}else{ // 为假，表示是IE
				return obj.innerText;
			}
		}else{  //设置
			if(obj.textContent||obj.textContent==""){
				obj.textContent=val; 
			}else{ 
				obj.innerText=val;
			}
		}
		
	}




//*********************************************************************************************



//3.获取通用样式的兼容函数 火狐 IE8
	//IE obj.currentStyle[att]
	//FF window.getComputedStyle(obj,null)[att]
	//obj 对象
	//att 属性
	function getStyle(obj,att){
		if(att==undefined){    //没有赋值属性时
			if(obj.currentStyle){  //为真，表示是IE
				return obj.currentStyle;
			}else{				//为假，表示是FF
				return window.getComputedStyle(obj,null);
			}
		}else{           //赋值属性时
			if(obj.currentStyle){   
				return obj.currentStyle[att];   //为真，表示是IE
			}else{
				return window.getComputedStyle(obj,null)[att];//为假，表示是FF
			}
		}
		
	}

//*********************************************************************************************

 //4.通过$()直接获取类名，id名，标签名,并可以代替window.onload
	// $(".one")[0]; 从类名获取 
	// $("#one"); 从id名获取
	// $("div")[0];  从tagname获取
	//  slice(0,1) charAt(0)==""
function $(selector,father){
	var obj=father||document;
	if(typeof selector=="string"){//判断这个参数是否是字符串
		selector=selector.replace(/^\s*|\s*$/g,"");//删除传入值时的空格 \s空格 
		if(selector.charAt(0)=="."){ //类名
			return getClass(selector.slice(1),obj);
		}else if(selector.charAt(0)=="#"){ //id
			return obj.getElementById(selector.slice(1));
		}else if( /^[a-z|1-10]{1,10}$/g.test(selector) ){
				// /^正则开始   $/正则结束 {1,10}1位到10位 text()判断 g全局比较
			return obj.getElementsByTagName(selector);
		}

	}else if(typeof selector=="function"){  // 代替window.onload
		window.onload=function(){
			selector();
		}
	}
}


//*********************************************************************************************

// 5.获取对象的子节点
// a:获取元素节点 b:获取元素+文本节点
function getChilds(father,type){
	var type=type || "a";  //type没有赋值时，默认为a(第二个参数省略，默认只获取元素节点)
	var childs=father.childNodes;//找到所有的儿子
	var arr=[];   //设置数组，保存
	for(var i=0;i<childs.length;i++){
		if(type=="a"){
			if(childs[i].nodeType==1){ //获取元素节点
				arr.push(childs[i]); // 将获取到的元素节点保存在数组中
			}
		}else if(type=="b"){
			if(childs[i].nodeType==1 ||  //获取元素节点				
				(childs[i].nodeType==3 && // 获取文本节点，同时也获取到了空值
					childs[i].nodeValue.replace(/^\s*\s$/g,"")!="")){  
					// 为了去掉空值，所以要根据节点值获取，但是获取到了文本节点，
					// 注释节点和空值，并通过正则去掉空值,剩下 文本节点，注释节点
					// ，通过&&运算，留下 文本节点
				arr.push(childs[i]);
			}
		}		
	}
	return arr;
		
}

function getChild(father,type){
	var type=type || "a";
	var childs=father.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++){
		if(type=="a"){
			if(childs[i].nodeType==1){
				arr.push(childs[i]);
			}
		}else if(type=="b"){
			if(childs[i].nodeType==1 || 
				(childs[i].nodeType==3 && 
					childs[i].nodeValue.replace(/^\s*\s$/g,"")!="")){
				arr.push(childs[i]);
			}
		}
	}
	return arr;
}

//*********************************************************************************************

// 6. 获取第一个子节点
// 
function getFirstChild(father){

	return getChilds(father)[0];

}


//*********************************************************************************************

// 7. 获取最后一个子节点
// 
function getLastChild(father){
	
	return getChilds(father)[getChilds(father).length-1];

}

//*********************************************************************************************

// 8. 获取指定子节点
// 
function getNum(father,num){
	return getChilds(father)[num];
}

//*********************************************************************************************

//9.获取下一个兄弟节点
function getDown(obj){
	var down=obj.nextSibling;

	while(down.nodeType==3 || down.nodeType==8){
		down=down.nextSibling;
		if (down==null) {
			return false;
		}
	}
	return down;
}


function getDown(obj){
	var down=obj.nextSibling;
	while(down.nodeType==3 || down.nodeType==8){
		down=down.nextSibling;
		if(down==null){
			return false
		}
	}
	return down;
}

//*********************************************************************************************

//10.获取上一个兄弟节点
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==3 || up.nodeType==8){
		up=up.previousSibling;
		if (up==null) {
			return false;
		}
	}
	return up;
}

function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==3 || up.nodeType==8){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}
//*********************************************************************************************


// 11. 插入到某个对象之后  （这是一个方法，对象可以调用，对象.insertAfter）
// 
// newobj 要追加的对象
// obj  在哪个对象之前
// var obj=new Object();
// Object.prototype.insertAfter=function(){}
// obj.insertAfter=function(){
// }
// 
// 对象共有的方法一般是加在原型上的，而原型只能给构造函数添加，所以
// 共有的方法是添加到对象的构造函数的原型上的。
// 
// this:指的是最终调用这个方法的对象，而这个对象是通过构造函数new出来的对象
Object.prototype.insertAfter=function(newobj,obj){
	var down=getDown(obj); //获取下一个兄弟节点
	
	if(down){ //如果兄弟节点存在
		this.insertBefore(newobj,down); //就把newobj插入到这个兄弟节点的前面（也就是obj对象的后面）
	}else{//如果兄弟节点不存在，表示obj就是最后一个节点
		this.appendChild(newobj);//直接追加到父容器的后面
	}
}




//*********************************************************************************************

// 12.漂浮框
	//box 要漂浮的盒子
	//close 关闭盒子的按钮
	//speedx 横向速度
	//speedy 纵向速度
	function floatWindow(box,close,speedx,speedy){
		var t=setInterval(move,30);
		
		var speedX=speedx||5;//速度x
		var speedY=speedy||5;//速度y
		var ch=document.documentElement.clientHeight;//浏览器高度
		var cw=document.documentElement.clientWidth;//浏览器宽度
		var sh=box.offsetHeight;//自身的宽度
		var sw=box.offsetWidth;//自身的高度
		//window.onload  文档加载完成事件
		//window.onscroll 窗口滚动条事件
		//window.onresize 窗口改变事件
		window.onresize=function(){
			ch=document.documentElement.clientHeight;//浏览器高度
			cw=document.documentElement.clientWidth;//浏览器宽度

		}


		function move(){
			var selfleft=box.offsetLeft;//自身左边距
			var selftop=box.offsetTop;//自身的上边距
			var newleft=selfleft+speedX;//加速之后的左边距
			var newtop=selftop+speedY;//加速之后的上边距

			if((ch-sh)<=newtop){//下 大于ch-sh就出去了，大于时，ch-sh赋值给newtop
				newtop=ch-sh;//上边距的最大值
				speedY*=-1;//变成负值，反方向
			}
			if((cw-sw)<=newleft){//右 大于cw-sw就出去了，大于时，cw-sw赋值给newleft
				newleft=cw-sw;//左边距的最大值
				speedX*=-1;//变成负值，反方向
			}
			if(newtop<=0){//上 小于0就出去了 小于0时，将0赋值给newtop
				newtop=0;//左边距的最大值
				speedY*=-1;//变成负值，反方向
			}
			if(newleft<=0){//左 小于0就出去了 小于0时，将0赋值给newleft
				newleft=0;//左边距的最大值
				speedX*=-1;//变成负值，反方向
			}

			box.style.left=newleft+"px";
			box.style.top=newtop+"px";

		}

		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,30);
		}
		close.onclick=function(){
			box.style.display="none";
		}
	}


//*********************************************************************************************

// 13.解决鼠标滚轮事件的兼容函数

function mouseWheel(obj,upfun,downfun){
	//添加滚轮事件的兼容问题
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn); 
		//IE、 opera 
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false); 
		//chrome,safari -webkit- 
		obj.addEventListener("DOMMouseScroll",scrollFn,false); 
		//firefox -moz-
	}

	function scrollFn(e){
		var ev= e || window.event;
		if(ev.detail==-3 || ev.wheelDelta==-120){//往上
			if(upfun){
				upfun();
			}
			
		}
		if(ev.detail==3 || ev.wheelDelta==120){//往下
			if(downfun){
				downfun();
			}
		}

		var ev=e||window.event;
		if(ev.preventDefault){ //阻止浏览器默认行为
			ev.preventDefault();// 阻止默认浏览器动作 w3c
		}else{
			ev.returnValue=false;// IE中阻止默认浏览器动作的方式
		}
	}

		
	

}

//*********************************************************************************************

// 14. 鼠标移入移出函数 hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/**************************************************************************************************/

//15. 阻止事件流的兼容函数
//obj:事件对象
function stopEvent(obj){
	if(obj.stopPropagation){
		obj.topPropagation();//FF
	}else{
		obj.cancelBubble=true;//IE
	}
}

/**************************************************************************************************/

//16. 阻止浏览器的默认行为的兼容函数
//obj:事件对象
function stopClient(obj){
	if(obj.preventDefault){
		obj.preventDefault();//阻止浏览器默认动作w3c
	}else{
		obj.returnValue=false;//IE中阻止浏览器默认动作的方式
	}
}


/**************************************************************************************************/

// 17. 同一事件添加多个处理程序的兼容函数
	function addEvent(obj,eve,fun){
		if(eve.slice(0,2)=="on"){
			if(obj.addEventListener){
				eve=eve.slice(2);
				obj.addEventListener(eve,fun,false);
			}else{
				obj.attachEvent(eve,fun,false);
			}
		}else{
			if(obj.addEventListener){
				obj.addEventListener(eve,fun,false);
			}else{
				obj.attachEvent("on"+eve,fun,false);
			}
		}
	
	}

	function removeEvent(obj,eve,fun){
		if(eve.slice(0,2)=="on"){
			if(obj.removeEventListener){
				eve=eve.slice(2);
				obj.removeEventListener(eve,fun,false);
			}else{
				obj.detachEvent(eve,fun,false);
			}
		}else{
			if(obj.removeEventListener){
				obj.removeEventListener(eve,fun,false);
			}else{
				obj.detachEvent("on"+eve,fun,false);
			}
		}
	
	}


















