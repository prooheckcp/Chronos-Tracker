function preload(){

};

function setup() {

  //Sets the canvas to fullscreen
  createCanvas(windowWidth, windowHeight);
};
  
function windowResized() {

  //Resizes the canva to the screen size
  resizeCanvas(windowWidth, windowHeight);
};

function draw() {
  //Covers the whole background
  background(220);

  //Draw the main header
  DrawTheMainHeader();
};


