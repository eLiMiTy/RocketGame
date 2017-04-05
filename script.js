$(document).ready(function() {
	
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var dx = 5;
var dy = 5;
var x = 150;
var y = 100;
var WIDTH = 1000;
var HEIGHT = 800;
var pressUp, pressDown, pressRight, pressLeft;



function rect(x,y,w,h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.stroke();
}

gameStep();

function gameStep() {
  move();
  draw();
  window.setTimeout(gameStep, 10);
}


function move() {
	if(pressUp) {
  	 if (y - dy > 0){
			y -= dy;
    	}
  	}	
	if(pressDown) {
  		if (y + dy < HEIGHT){
			y += dy;
		}
 	}
	if(pressLeft) {
 		if (x - dx > 0){
			x -= dx;
		}
  	}	
	if(pressRight) {
		if (x + dx < WIDTH){
			x += dx;
		}
	}	
 }


function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
return setInterval(draw, 20);
}

function doKeyDown(evt){
	evt.preventDefault();
	switch (evt.keyCode) {
		case 38:  /* Up arrow was pressed */
			pressUp=true;
			break;
		case 40:  /* Down arrow was pressed */
			pressDown=true;
			break;
		case 37:  /* Left arrow was pressed */
			pressLeft=true;
			break;
		case 39:  /* Right arrow was pressed */
			pressRight=true;
			break;
	}

}

function doKeyUp(evt){
	evt.preventDefault();
	switch (evt.keyCode) {
		case 38:  /* Up arrow was pressed */
			pressUp=false;
			break;
		case 40:  /* Down arrow was pressed */
			pressDown=false;
			break;
		case 37:  /* Left arrow was pressed */
			pressLeft=false;
			break;
		case 39:  /* Right arrow was pressed */
			pressRight=false;
			break;
	}

}

function draw() {
	clear();
	var img = document.getElementById("img_rocket");
	ctx.drawImage(img, x, y, 100, 100);
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	rect(0,0,WIDTH,HEIGHT);
	ctx.fillStyle = "purple";
}


init();

window.addEventListener('keydown',doKeyDown,true);
window.addEventListener('keyup',doKeyUp,true);
});
