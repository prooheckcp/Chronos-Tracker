function preload(){

  //Load the images content
  loadTheImages();
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

  image(BackgroundImage, 0, 0, windowWidth, windowHeight);

  //Draw the main header
  DrawTheMainHeader();
};


