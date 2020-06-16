//Variables\\
const UIelements = [];
//__________\\

function preload(){

  //Load the images content
  loadTheImages();
};

function setup() {

  //Sets the canvas to fullscreen
  createCanvas(windowWidth, windowHeight);

  //Create the header buttons
  CreateHeaderButtons();


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

  //Draw the UI elemnts
  for(button of UIelements){
    button.draw();
  };

};

function mousePressed(clickInfo){

  //for the UI elements
  for(button of UIelements){
    button.click1(clickInfo.buttons);
    button.click2(clickInfo.buttons);
  }
};
