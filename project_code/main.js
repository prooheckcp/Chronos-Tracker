//Variables\\

  //To draw
  const UIelements = [];

  //Current tab

    //Home ID
    let HomeID = 0;

    //Timer ID
    let TimerID = 1;

    //About ID
    let AboutID = 3;

    //The current tab ID
    let TabID = 1;


  //Fonts
  let GoodTimesFont;
  let ArialBold;
  let JapaneseFont;
  let DenseFont;
  let AntiCoronaFont;

//__________\\

function preload(){

  //Load the images content
  loadTheImages();

  //Load the fonts
  JapaneseFont = loadFont("project_code/assets/ArigatouGozaimasu-1Gnqg.ttf");
  GoodTimesFont = loadFont("project_code/assets/goodtimesrg.ttf");
  ArialBold = loadFont("project_code/assets/arial-bold.ttf")
  DenseFont = loadFont("project_code/assets/DenseLetter.ttf");
  AntiCoronaFont = loadFont("project_code/assets/AntiCorona.ttf");

};

function setup() {

  //Frame
  frameRate(30);

  //Sets the canvas to fullscreen
  createCanvas(windowWidth, windowHeight);

  //Create the header buttons
  CreateHeaderButtons();

  //Load the about buttons
  LoadAboutButtons();

  //Timer Buttons
  CreateTimerButtons();

};
  
function windowResized() {

  //Resizes the canva to the screen size
  resizeCanvas(windowWidth, windowHeight);
};

function draw() {
  //Covers the whole background
  background(220);

  image(BackgroundImage, 0, 0, windowWidth, windowHeight);

  //Count the timer time
  CountTime();

  //Choose the tab to be counted
  if(TabID == HomeID){
    DrawTheHome();
  }else if(TabID == TimerID){
    DrawDefaultTimer();
  }else if(TabID == 2){
    
  }else if(TabID == AboutID){
    DrawAbout();
  };

  //Remove the input boxes
  if(TabID != TimerID){
    RemoveTimerInputs();
  };

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
  };

  //About window clicking events
  if(TabID == AboutID){

    AboutClickEvents(clickInfo.buttons);
  };

  //Timer window clicking events
  if(TabID == TimerID){

    TimerClickEvents(clickInfo.buttons);
  };

};
