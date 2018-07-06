var maxCircleSize = 200;
var phase = 0, speed = 0.03;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(127);
  let x = width/2 + sin(phase) * 60;
  let y = height/2 + sin(phase) * 50;
  phase = frameCount * speed;
  let sizeOffset = (cos(phase) + 1) * 0.5;
  let circleSize = sizeOffset * maxCircleSize;
  
  ellipse(x, y, circleSize, circleSize);

}
