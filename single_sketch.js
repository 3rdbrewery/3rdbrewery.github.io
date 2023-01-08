// Single-sketch example

function setup (){
  createCanvas (windowWidth-20, windowHeight-20);
  textSize(windowWidth/7);
}

function draw(){
  background(255);
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  text('3rd_brewery', 0,0);
  text('제3양조',0,300);
  showWinSize();
}

function windowResized() {
  resizeCanvas(windowWidth-20,windowHeight-20);
  textSize(windowWidth/7);
}

function showWinSize() {
  console.log (windowWidth);
  console.log (windowHeight);
  
}