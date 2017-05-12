$(document).ready(function() {
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var dx = 5;
	var dy = 5;
	var x = 450; 
	var y = 600;
	var WIDTH = 1000; 
	var HEIGHT = 800;
	var pressUp, pressDown, pressRight, pressLeft;
	var bgImage=document.getElementById("bg");
	var gameOn = false;
	var bgPos=0;

	var aste = new Array();





	var rocket= {


		x: 300,
		y: 200,
		fancyStuff: "jo"

	};
	function startGame() {


	} 

	function rect(x,y,w,h) {
		ctx.beginPath();
		ctx.rect(x,y,w,h);
		ctx.closePath();
		ctx.stroke();
	}

	gameStep();
	drawAsteroids();
	moveAsteroids();

	function gameStep() {
		startGame()
		move();
		draw();
		window.setTimeout(gameStep, 10);
	}


	function move() {
		if(gameOn == true) {

			bgPos++;
			if (bgPos==HEIGHT) {
				bgPos=0;
			}
			if(pressUp) {
				if (y - dy > 0){
					y -= dy;
				}
			}	
			if(pressDown) {
				if (y + dy < HEIGHT-90){
					y += dy;
				}
			}
			if(pressLeft) {
				if (x - dx > -20){
					x -= dx;
				}
			}	
			if(pressRight) {
				if (x + dx < WIDTH-80){
					x += dx;
				}
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
		ctx.drawImage(bgImage, 0, bgPos);
		ctx.drawImage(bgImage, 0, bgPos-HEIGHT);
		ctx.drawImage(img, x, y, 100, 100);
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		rect(0,0,WIDTH,HEIGHT);
		ctx.fillStyle = "red";
		if (gameOn == false) {
			$("body").keydown(function(event) {
				if(event.keyCode == 32) {						
					gameOn = true;
					$(".canvasdiv").css("opacity", 1);
				}

			}); 
		}


		aste.forEach(function(aste) {
			// // Zeichnet einen individuellen Komten
            ctx.beginPath();
            ctx.arc(aste.x, aste.y, 20, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
		});
	}

	function moveAsteroids() {
		aste.forEach(function(aste) {
			aste.y += 2;
		})
		setTimeout(moveAsteroids, 10);
	}

	init();
	window.addEventListener('keydown',doKeyDown,true);
	window.addEventListener('keyup',doKeyUp,true);

	function drawAsteroids() {
        // Zeichnet Kometen
        for (i = 0; i <= 10; i++) {
          // Zufallsposition für Kometen
          var a = Math.floor(Math.random() * 995);
          var b = Math.floor(Math.random() * 795);

          b *= -1;
         
          aste.push({x:parseInt(a), y:parseInt(b)});

        
        }

        setTimeout(drawAsteroids, 3000);
      }
});
