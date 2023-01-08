// Single-sketch example

function setup (){
  createCanvas (windowWidth-20, windowHeight-20);
  textSize(windowWidth/7);
  
}

function draw(){
  background(255);
  fill(0);
  stroke(153);
  textAlign(LEFT, TOP);
  text('3rd_brewery', 0,0);
  line(0,0,width,0);
  text('3rd_brewery', 0,10 + windowHeight/7 );
  line(0,10 + windowHeight/7,width,10 + windowHeight/);
  text('3rd_brewery', 0,10 + 2*windowHeight/7);
  text('3rd_brewery', 0,10 + 3*windowHeight/7);
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