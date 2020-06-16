//Variables\\

  //To draw
  const UIelements = [];

  //Current tab
    //ID 0 = Home; 
    let TabID = 0;


  //Fonts
  let GoodTimesFont;
  let ArialBold;


//__________\\

function preload(){

  //Load the images content
  loadTheImages();

  //wont work
  GoodTimesFont = loadFont("project_code/assets/goodtimesrg.ttf");
  ArialBold = loadFont("project_code/assets/arial-bold.ttf")
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

  if(TabID == 0){
    DrawTheHome();
  }

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
