var rRect=function (color,myCanvas,x,y,w,h,r){
	var c=document.getElementById(myCanvas);
var ctx=c.getContext("2d");
// var x=0;
// var y=0;
// var w=100;
// var h=100;
// var r=10;
ctx.beginPath();

ctx.moveTo(x+r, y);
ctx.arcTo(x+w, y, x+w, y+h, r);
ctx.arcTo(x+w, y+h, x, y+h, r);
ctx.arcTo(x, y+h, x, y, r);
ctx.arcTo(x, y, x+w, y, r);
// this.arcTo(x+r, y);
ctx.closePath();
// 	
ctx.fillStyle=color;
ctx.fill();
}

// rRect("#fdfd00","myCanvas1",0,0,100,100,10);
// rRect("#fdfd00","myCanvas2",0,0,100,100,10);
// rRect("#fdfd00","myCanvas3",0,0,100,100,10);
// rRect("#fdfd00","myCanvas4",0,0,100,100,10);
// (function(){
// 	var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.beginPath();
// ctx.moveTo(20,20);           // 创建开始点
// ctx.lineTo(100,20);          // 创建水平线
// ctx.arcTo(150,20,150,70,50); // 创建弧
// ctx.lineTo(150,120);         // 创建垂直线
// ctx.stroke();
// })();