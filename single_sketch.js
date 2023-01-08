// Single-sketch example

function setup (){
  createCanvas (windowWidth-20, windowHeight-20);
  textSize(windowWidth/7);
  myfont = loadFont('assets/kopub.otf');
  textFont(myfont);
}

function draw(){
  background(255);
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  text('제3양조', 0,0);
  text('제3탁주', 0,200);
  text('제3과하주', 0,400);
  text('제3소주', 0,600);
  text('3rd_brewery', 0,800);
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

function txtSize() {
  
}