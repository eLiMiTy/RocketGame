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

	var pause= true;
	var fire = false;


	var aste = new Array();
	var life = document.getElementById("life");





	var rocket= {


		x: 300,
		y: 200,
		fancyStuff: "jo"

	};
	

	function rect(x,y,w,h) {
		ctx.beginPath();
		ctx.rect(x,y,w,h);
		ctx.closePath();
		ctx.stroke();
	}

	


	drawAsteroids();
	moveAsteroids();


	function gameStep() {
		if(gameOn == true){
			move();
			draw();

			moveAsteroids();
			collideTest();
			bang();


			
			
		

		}
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
			case 27:	
			break;
			case 32:
			fire = true
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
			case 27:
			gameOn = false;
			pause = true;	
			break;
			case 32:
			pause = false;
			gameOn = true;
			fire = false;


		}

	}
	switch(life){

	}

	

	function draw() {
		clear();
		var img = document.getElementById("img_rocket");
		ctx.drawImage(bgImage, 0, bgPos);
		ctx.drawImage(bgImage, 0, bgPos-HEIGHT);
		ctx.drawImage(life, 10, 10,	10,	10);
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
		drawAsteroids();

	}

	if(pause) {
		$(".canvasdiv").css("opacity", 0.7);
		ctx.font="120px Comic Sans MS";
		ctx.fillStyle = "red";
		ctx.textAlign = "center";
		ctx.fillText("Menu", canvas.width/2, canvas.height/2);
		ctx.fillStyle = "white"
		ctx.font="60px Comic Sans MS";
		ctx.fillText("press space to continue", canvas.width/2, canvas.height/2 + 100);
	}
	if(pause == false) {						
		$(".canvasdiv").css("opacity", 1);
	}	



	aste.forEach(function(aste) {
			// // Zeichnet einen individuellen Komten
			ctx.beginPath();
			ctx.arc(aste.x, aste.y, 20, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		});



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
           
          ctx.fillStyle = "#FF0000";


          b *= -1;

          aste.push({x:parseInt(a), y:parseInt(b)});


      }

      setTimeout(drawAsteroids, 3000);
  }


  function collideTest() {

        // Collision detection. Get a clip from the screen.
        // See what the ship would move over.
        var clipWidth = 80;
        var clipDepth = 100;
        var clipLength = clipWidth * clipDepth;
        var clipOffset = 5;
        var whatColor = ctx.getElementById "img_rocket"(shipX + clipOffset, shipY + clipOffset, clipWidth, clipDepth);

        // Loop through the clip and see if you find red or blue. 
        for (var i = 0; i < clipLength * 4; i += 4) {
          if (whatColor.data[i] == 255) {
            direction = "P";
            break;
          }
          // Second element is green but we don't care. 
          if (whatColor.data[i + 2] == 255) {
            direction = "B";
            break;
          }
          // Fourth element is alpha and we don't care. 
        }

        // Did we hit something?
        if (direction == "P") bang();
        if (direction == "B") youWin();
      }

      function bang() {

        // You lose.
        alert("Game over! You hit an asteroid.");
        // Stop game.
        clearTimeout(gameLoop);
        window.removeEventListener('keydown', whatKey, true);
      }
});
