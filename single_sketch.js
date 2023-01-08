// Single-sketch example

let b1;
let b2;

function setup (){
  createCanvas (windowWidth-20, windowHeight-20);
  textSize(windowWidth/7.5); 
}

function draw(){
  textAlign(LEFT,TOP);
  noStroke();
  text("제3양조", 0,0);
  text("제3탁주", 0,windowWidth/7.5);
  text("제3탁주12", 0,2*windowWidth/7.5);
  text("제3과하주", 0,3*windowWidth/7.5);
  
}

function windowResized() {
  resizeCanvas(windowWidth-20,windowHeight-20);
  textSize(windowWidth/7)
  clear();
  
 
}

function drawMenu() {
  
}
