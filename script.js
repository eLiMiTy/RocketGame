$(document).ready(function() {
	
var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 150;
var y = 100;
var WIDTH = 1000;
var HEIGHT = 800;

function drawImage {
	window.onload = function() {
    	canvas = document.getElementById("canvas");
	    var ctx = canvas.getContext("2d");
	    var img = document.getElementById("img_rocket");
	    ctx.drawImage(img, 10, 10, 100, 100);
}
}

function rect(x,y,w,h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
return setInterval(draw, 10);
}

function doKeyDown(evt){
switch (evt.keyCode) {
	case 38:  /* Up arrow was pressed */
		if (y - dy > 0){
			y -= dy;
		}
break;
	case 40:  /* Down arrow was pressed */
		if (y + dy < HEIGHT){
			y += dy;
		}
break;
	case 37:  /* Left arrow was pressed */
		if (x - dx > 0){
			x -= dx;
		}
break;
	case 39:  /* Right arrow was pressed */
		if (x + dx < WIDTH){
			x += dx;
		}
break;
}

}

function draw() {
	clear();
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	rect(0,0,WIDTH,HEIGHT);
	ctx.fillStyle = "purple";
	circle(x, y, 10);
}


init();

window.addEventListener('keydown',doKeyDown,true);

});
