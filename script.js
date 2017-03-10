$(document).ready(function() {

$('canvas').drawLine({
  strokeStyle: 10,
  strokeWidth: 10,
  x1: 1000, y1: 0,
  x2: 1000, y2: 800,
  x3: 0, y3: 800,
  x4: 0, y4: 0,
  x5: 1000, y5: 0,
  
});

$('canvas').drawImage({
  source: '../RocketGame/Images/Rocket.png',
  x: 450, y: 700,
  width: 80,
  height: 100,
  fromCenter: false,
});


});
