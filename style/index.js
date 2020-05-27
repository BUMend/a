// 轮播图
//初始化函数
window.onload=init;
//全局定时器变量
var timer;
//全局_获取图片
var obj=document.getElementById("img1");
//初始定时器
function init(){
	timer=window.setInterval("picture()",3000);
	//制作小图片边框
	var ob=document.getElementById("li1");
	// alert(ob);
	ob.border="3px";
	ob.style.borderColor="orange";
}
//初始定时器调用图片
var n=1;
function picture(){
	//放第n张图片
	obj.src="images/"+n+".jpeg";
	//利用for消除其他4张图片的边框
	for(var m=1;m<=5;m++){
			var ob=document.getElementById("li"+m);
			ob.border="0";
			ob.style.borderColor="";
		}
	//到那张图片那张小图片边框边色
	var ob1=document.getElementById("li"+n);
	ob1.border="3px";
	ob1.style.borderColor="orange";
	n++;
	if(n>5){
		n=1;
	}
}
//鼠标放上停图片
	obj.onmouseover=function(){
		window.clearInterval(timer);
	}
//鼠标离开开启timer
	obj.onmouseout=function(){
		timer=window.setInterval("picture()",3000);
	}
//鼠标放上ul
function start_tow(i,lin){
	var obj=document.getElementById("img1");
	n=i;
	obj.src="images/"+n+".jpeg";
	window.clearInterval(timer);

	start_tow2(lin);
}
function start_tow2(lin){
	for(var m=1;m<=5;m++){
			var ob=document.getElementById("li"+m);
			ob.border="0";
			ob.style.borderColor="";
		}
	lin.border="3px";
	lin.style.borderColor="orange";
}


var div=document.getElementById('border'); //获取div
var title=document.getElementById("title");
var a=title.getElementsByTagName('a');

	// for(var i=0;i<a.length;i++){
 //       a[0].onmouseover = function(){
 //       		slide(div,-4,0,145,30,0.5);
 //       }
 //       // a[1].onmouseout = function(event){
 //       // 		slide(border,0,-4,140,50,1);
 //       // }

 //       a[1].onmouseover = function(){
 //       		slide(div,-4,0,245,30,0.5);
 //       }
 //       a[1].onmouseout = function(){
 //       		slide(div,-4,0,145,30,0.5);
 //       }

 //       a[2].onmouseover = function(){
 //       		slide(div,-4,0,345,30,0.5);
 //       }
 //       a[2].onmouseout = function(){
 //       		slide(div,-4,0,145,30,0.5);
 //       }

 //       a[3].onmouseover = function(){
 //       		slide(div,-4,0,445,30,0.5);
 //       }
 //       a[3].onmouseout = function(){
 //       		slide(div,-4,0,145,30,0.5);
 //       }
 //    }

// title.onmouseover=function(event){
// 	slide(border,-4,0,50,1);
// }
// title.onmouseout=function(event){
// 	slide(border,0,-4,50,1);
// }


function slide(obj,x1,x2,x3,s,step){
	if(x1<x2){
		//上移动
		t=setInterval(function(){
			x1=x1+step;
			obj.style.top=x1+"px";
			obj.style.left=x3+"px";
			//如果已经到达目标位置，需要停止 需要校正
			if(x1>=x2){
				clearInterval(t);
				obj.style.top=x2+"px";
			}
		},s);
	}else{
		//下移动
		t=setInterval(function(){
			x1=x1-step;
			obj.style.top=x1+"px";
			obj.style.left=x3+"px";
			if(x1<=x2){
				clearInterval(t);
				obj.style.top=x2+"px";
			}
		},s);
	}
}

















//导航栏
// var title=document.getElementById("title");
// var a=title.getElementsByTagName('a');
	// for(var i=0;i<a.length;i++){
 //       // a[i].onclick = function(event){
 //            // alert(this.innerHTML);
 //            a[i].style.border="4";
 //       // };
 //    }
// var title = document.getElementById('title');
// title.onclick = function(event){
	// alert(event.target.innerHTML);
	// event.target.border="3px";
	// event.target.style.borderColor="red";
// }



