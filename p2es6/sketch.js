"use strict";

var maxCircleSize = 200;
var phase = 0,
    speed = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(127);
  var x = width / 2 + sin(phase) * 60;
  var y = height / 2 + sin(phase) * 50;
  phase = frameCount * speed;
  var sizeOffset = (cos(phase) + 1) * 0.5;
  var circleSize = sizeOffset * maxCircleSize;

  ellipse(x, y, circleSize, circleSize);
}