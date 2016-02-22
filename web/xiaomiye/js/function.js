
// 1. // 获取 IE8 Class 兼容问题的函数
		// classname：传的是类名，类名是字符串类型
		// obj: 父容器，表示从哪个父容器里来获取子容器
		function getClass(classname,father){
			var obj=father||document;
			//只要有一个是真值结果就是真的，如果obj存在，则赋值给声明的obj，如果不存在就返回document.
			// 两个同为真时，返回第一个真值。
			//alert(obj);
			if (obj.getElementsByClassName) {  //判断是否为真，如果是真的就说明是现代浏览器
				return obj.getElementsByClassName(classname);
			}else{
				var tags=obj.getElementsByTagName('*');  //  获取参数的所有classname给了变量tags	
				var arr=[];      // 定义一个新数组
				for (var i = 0; i < tags.length; i++) {   // 遍历每一classname
					if (checkClass(tags[i].className,classname)) {  //  如果每个元素的名字都等于 classname的名字 
						arr.push(tags[i]);   // 将这个元素给了新的集合（数组）。
					};
				};
			}
			return arr;   // 返回  这个数组
		}

		function checkClass(str,classname){  //有多个元素时，检测一个元素里面是否有我们想要找的类名
			var newarr=str.split(" ");   // 将元素的类名（字符串）以空格分割，将其存储在新的数组中
			for (var i = 0; i < newarr.length; i++) {   // 遍历这个数组
				if (newarr[i]==classname) {  // 判断数组中个元素是否等于传入的类名
					return true;   // 相等时，返回真  
								   // return  就是返回并终止
				};
			};
			return false;    // 遍历完数组之后，如果没有找到相同的类名，就返回假
		}


		/*var xiao=getClass("xiao",getClass("da")[0]);
		//document.write(xiao.length);
		xiao[2].style.background="pink";*/

//***********************************************************************************************


// 2. // 获取IE中纯文本内容的 兼容函数
	  // obj：从哪个对象里获取纯文本
	  // val：表示要设置的文本
		function getText(obj,val){
			if (val!=undefined) { // 如果不是undefined就设置
				if (obj.textContent||obj.textContent=="") {  // 获取
					obj.textContent=val;
				}else{
					obj.innerText=val;
				}
			}else{   //  如果是undefined时 表示获取
				if (obj.textContent) {  //  如果为真说明是 FF（火狐）浏览器
					return obj.textContent;
				}else{      // else表示为假的时候，就是IE；
					return obj.innerText;
				}
			}
		}


//**********************************************************************************************

// 3. // 获取属性样式的兼容
	  // obj：从哪个对象里获取属性
	  // shu: 表示要获取的属性
function getStyle(obj,shu){
	if (window.getComputedStyle) {   // 如果可以识别表示这个浏览器是FF
		return window.getComputedStyle(obj,null)[shu];   //FF里 返回它的属性   传入的是字符串，所有要获取就得加 []。
	}else{                                                // 否则就是 IE 
		return obj.currentStyle[shu];     // 在IE里 返回它的属性
	}
}



//***********************************************************************************************

// 4. // 获取document对象   $ 函数
	  //  selector: class   id    标签
	  //  father: 传入的父容器
function $(selector,father){
	var obj=father||document;    //  obj: 父容器，表示从哪个父容器里来获取子容器
	if (typeof selector=="string") {  // 判断传入的值是否是一个字符串

		//  /^\s*|\s*$/g  // 找出前后有空格的字符串
		// 例如："      div","    .class","    #id"  针对这种情况解决如下：
		var selector=selector.replace(/^\s*|\s*$/g,"");    
									//  前后有空格的时候   用""空字符串将其代替   替换以后的结果 覆盖原来的selector
		if (selector.charAt(0)==".") {  //  类名
			return getClass(selector.slice(1),obj);   //   获取时   应从第二个字符开始。
		}else if(selector.charAt(0)=="#"){   //   Id名
			return obj.getElementById(selector.slice(1));
		}else if(/^[a-z|1-10]{1,10}$/g.test(selector)){
			return obj.getElementsByTagName(selector);
		}
	}else if (typeof selector=="function") {     // 函数
		window.onload=function(){
			selector();      //  直接 运行
		} 
	}
}


//************************************************************************************************

// 5. // 获取对象的子节点 兼容函数
	  // father: 是父节点；
	  // type: 是节点的类型
	  	// 为a的时候: 获取元素节点
	  	// 为b 的时候：获取的是元素和文本节点 

function getChilds(father,type){
	var type=type||'a';   //  type 没有赋值时  默认为'a' ;   也就是第二个参数省略时  默认只获取元素节点
	var childs=father.childNodes;   //   找的所有的儿子节点
	var arr=[];     // 声明一个容器   放儿子节点
	for (var i = 0; i < childs.length; i++) {   // 遍历儿子节点
		if (type=='a') {   //  获得元素节点
			if (childs[i].nodeType==1) {    // 节点类型为 1 的时候，说明是元素节点
				arr.push(childs[i]);   //  将儿子的元素节点 放到新的容器中   因为是个集合 所以放数组里比较合适
			}		
		}else if (type=='b') {   //  获取 元素节点 和文本节点
			if (childs[i].nodeType==1||(childs[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""&&childs[i].nodeType!=8)) {
			    // 节点类型为 1 的时候，说明是元素节点    ，  文本节点是：去除了空白节点  和  注释节点
				arr.push(childs[i]);   //  将儿子的元素节点 放到新的容器中   因为是个集合 所以放数组里比较合适
			}
		}
	}
	return arr;   //   最后完了之后要给一个返回值。
	
 }



 // ***********************************************************************************************


 // 6. // 获取第一个子节点
 	   // 
 function getFirst(father){
 	return	getChilds(father)[0];	
 }


 // ***********************************************************************************************


 // 7. // 获取最后一个子节点
 	   // 
 function getLast(father){
 	return	getChilds(father)[getChilds(father).length-1];	
 }

 // ***********************************************************************************************

 // 8. // 获取指定的子节点

 	function getNum(father,num){
 		return getChilds(father)[num];
 	}

 // ***********************************************************************************************

// 9. // 获取下一个兄弟节点

	function getDown(obj){
		var down=obj.nextSibling;
		while(down.nodeType==3||down.nodeType==8) {   //  当找到的是文本节点或注释节点的时候，继续找
			down=down.nextSibling;      //   每次找完之后 都要将原来的down 值 覆盖
			if (down==null) {         //   while是循环   它的结束条件是    所有的都找完之后，也就是down为 空的时候。
				return false;       //  函数体  停止    因为找不到   就给返回一个false值。
			}
		}
		return down;      //　　　所有的都运行之后　　就返回ｄｏｗｎ的结果。
	}

 // ***********************************************************************************************

// 10. // 获取上一个兄弟节点

	function getUp(obj){
		var up=obj.previousSibling;
		if (up==null) {
			return false;
		};
		while(up.nodeType==3||up.nodeType==8) {
			up=up.previousSibling;
			if (up==null) {
				return false;
			}
		}
		return up;
	}



// 11. // 要插入到某个对象之后    (只适用于div)
	   // newobj:要追加的对象
	   // obj: 在那个对象之后

	   // this: 指的是最终调用这个方法的对象。而这个对象是通过构造函数new出来的对象。

// 对象共有的方法一般是加在原型上的，而原型只能给构造函数添加，所以公共的方法是添加到对象的构造函数的原型上的。 
Object.prototype.insertAfter=function(newobj,obj){
	var down=getDown(obj);   //  获取 obj 的下一个兄弟节点
	if (down) {                // 如果 这个兄弟节点存在
		this.insertBefore(newobj,down);    //  就把这个 newobj 插入到这个兄弟节点的前面（也就是obj对象的后面）
	}else{              // 　如果这个兄弟节点不存在，表示ｏｂｊ就是最后一个节点了。
		this.appendChild(newobj,down);　　　//  直接追加到父对象的后面。
	}
}



//*******************************************************************************************


// 12. 滚动条的兼容

     var obj=document.documentElement.scrollTop?document.documentElement:document.body;


//**********************************************************************************************


// 漂浮窗的函数
// obj：漂浮的窗口
// btnobj: 关闭按钮
// speedx： X轴的速度
// speedy： y轴的速度

/*
function getFloat(obj,btnobj,speedx,speedy,time){
		obj.style.position="fixed";
		var sheepX=speedx||5;   // X轴的速度
		var sheepY=speedy||5;	// Y轴的速度
		var swidth=obj.offsetWidth;   // 自身的宽度
		var sheight=obj.offsetHeight;  // 自身的高度

		var cwidth=document.documentElement.clientWidth;   // 浏览器的宽
		var cheight=document.documentElement.clientHeight;   // 浏览器的高
		window.onresize=function(){
			cwidth=document.documentElement.clientWidth;   // 浏览器的宽
			cheight=document.documentElement.clientHeight;   // 浏览器的高
		}
				
		var t=setInterval(move,time);		
		function move(){			
			var selfleft=obj.offsetLeft;  // 自身的左边距
			var selftop=obj.offsetTop;  // 自身的上边距

			var newleft=selfleft+sheepX;  // 加速以后的左边距
			var newtop=selftop+sheepY;		// 加速以后的上边距

			if (newtop>=(cheight-sheight)) {   // 上
				newtop=cheight-sheight;
				sheepY*=-1;
			};
			if (newleft>=(cwidth-swidth)) {  // 右
				newleft=cwidth-swidth;
				sheepX*=-1;
			};
			if (newtop<=0) {           //下
				newtop=0;
				sheepY*=-1;
			};
			if (newleft<=0) {   // 左
				newleft=0;
				sheepX*=-1;
			};
			obj.style.left=newleft+"px";
			obj.style.top=newtop+"px";
		}
		obj.onmouseover=function(){
			clearInterval(t);
		}
		obj.onmouseout=function(){
			t=setInterval(move,time);
		}
		btnobj.onclick=function(){
			obj.style.display="none";
			// document.body.removeChild(boxs);

		}*/




// ******************************************************************************

// 13 // 同一事件添加多个处理程序的兼容函数
	
	function addEvent(obj,event,fun){
		if (obj.addEventListener) {
			return obj.addEventListener(event,fun,false);
		}else{
			return obj.attachEvent("on"+event,fun);
		}
	}


//***********************************************************************************

// 14 // 同一事件移出多个处理程序的兼容函数

	function removeEvent(obj,event,fun){
		if (obj.removeEventListener) {
			return obj.removeEventListener(event,fun,false);
		}else{
			return obj.detachEvent("on"+event,fun);
		}
	}


//***************************************************************************************

// 15 获取scrollTop 兼容函数
function getObj(){
	return obj=document.documentElement.scrollTop?document.documentElement:document.body;
}

// **************************************************************************************

// 16 鼠标滚轮 的兼容函数

function mouseWheel(obj,upfun,downfun){
		if(obj.attachEvent){
			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
		}else if(obj.addEventListener){
			obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit-
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
		}

		function scrollFn(e){
			var ev=e||window.event;
			if(ev.detail==-2||ev.wheelDelta==120){   // 滚轮往上
				if (upfun) {   //  如果函数存在
					upfun.call(obj);    // 调用函数
				}
			} 
			if(ev.detail==2||ev.wheelDelta==-120){   //   滚轮往下
				if (downfun) {   //  如果函数存在
					downfun.call(obj);   // 调用函数
				}
			}
			// 阻止浏览器的默认事件
			if (ev.preventDefault )
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
			else
			ev.returnValue = false;//IE中阻止函数器默认动作的
			方式
			}	

}



//****************************************************************************************

// 17 // hover事件

hover
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



//*************************************************************************

 // 18 // 获取 事件对象 e 

 function getEvent (e) {
      return e||window.event;
 }


//******************************************************************************

// 19 // 冒泡阻止事件的兼容函数

//  obj: 事件对象

function stopEvent(obj){
	if (obj.stopPropagetion) {
		obj.stopPropagetion();
	}else{
		obj.cancelBubble=true;
	}
}


//********************************************************************************

// 20 // 阻止浏览器的默认行为的兼容函数

function stopClient(obj){
	if (obj.preventDefault ){
		obj.preventDefault(); //阻止默认浏览器动作(W3C)
	}else{
		obj.returnValue = false;//IE中阻止函数器默认动作的方式
	}
}



// *******************************************************************************

//  21 

/*  检测 变量中存储的数据类型 
	isType(o,type)

	[Array,Object,String,Boolean,Number,Null,Function,undefined];
	返回值  true  false
*/


	function isType(o,type){
		alert(Object.prototype.toString.call(o));
		if (Object.prototype.toString.call(o)=='[object '+type+']') {
			return true;
		}
		return false;
	}

	function isArray(o){
		return isType(o,'Array');
	}
	function isObject(o){
		return isType(o,'Object');
	}



// ******************************************************************************************

//  22 

/*
	获取具有定位属性的父元素  相对于 body的left   top 值   
	offset(obj).left   获取相对于body   的 left  值
	offset(obj).top    相对于body   的 top 值
*/

function drag(obj){
			obj.onmousedown=function(e){
				var ev=e||window.event;
				var cx=ev.clientX;
				var cy=ev.clientY;
				var ox=ev.layerX||ev.offsetX;
				var oy=ev.layerY||ev.offsetY;
				// var parentL=offset(obj).left;    //   可能会算两次
				// var parentT=offset(obj).top;
				var offsets=offset(obj);
				var parentL=offset(obj).left;    //   优化
				var parentT=offset(obj).top;
				document.onmousemove=function(e){
					var ev=e||window.event;
					var ncx=ev.clientX;
					var ncy=ev.clientY;
					obj.style.left=(ncx-ox-parentT)+'px';
					obj.style.top=(ncy-oy-parentL)+'px';
				}
				obj.onmouseup=function(){
					document.onmousemove=null;
				}
			}
		}


		function offset(obj){
			var parent=obj.parentNode;  //  父容器
			var arr=[];  // 存储有定位属性的父元素

			var x=0;   //   没有算自己的
			var y=0;
			// var x=obj.offsetLeft;
			// var y=obj.offsetTop;
			while(parent.nodeName!=='BODY'){     
				getStyle(parent,'position');   //   获取属性  
				if(attr=='absolute'||attr=='fixed'||attr=='relative'){  //  找有定位属性的父容器
					arr.push(parent);    //  将找出来的放到数组中
				}
				parent=parent.parentNode;           //   一直找
			}
			// console.log(arr);

			
			for (var i = 0; i < arr.length; i++) {
				var top=arr[i].offsetTop;
				var borderT=parseInt(getStyle(arr[i],'borderTopWidth'));
				y+=top+borderT;

				var left=arr[i].offsetLeft;
				var borderL=parseInt(getStyle(arr[i],'borderLeftWidth'));
				x+=left+borderL;
			}
			return {left:x,top:y}
		}