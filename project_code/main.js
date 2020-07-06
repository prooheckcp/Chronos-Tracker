//Variables\\

  //To draw
  const UIelements = [];

  //Current tab

    //Home ID
    let HomeID = 0;

    //Timer ID
    let TimerID = 1;

    //List ID
    let ListID = 2;

    //About ID
    let AboutID = 3;

    //The current tab ID
    let TabID = 0;


  //Fonts
  let GoodTimesFont;
  let ArialBold;
  let JapaneseFont;
  let DenseFont;
  let AntiCoronaFont;

  //Sound
  let TappingSound;

  //Assets
  let TimerBackgroundImage;
  let TimerImagePortrait;
  let NoImageReplacer;
  let TimerNameImage;
  let GreenButtonImage;
  let YellowButtonImage;
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

  //Load the sounds
  TappingSound = loadSound('project_code/assets/TappingSoundEffect.mp3');
  masterVolume(0.2);
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

  //Timers list buttons
  LoadListButtons();

  //New timer window buttons
  LoadNewTimerButtons();

  //Load the timers data
  LoadTimerData();

  //Load the manage timer buttons
  SetupManageTimerButtons();

  //Load the home buttons
  LoadHomeButton();

  //Save the timers on a json file
  setInterval( SaveTimersBackEnd, 5000);

};
  
function windowResized() {

  //Resizes the canva to the screen size
  resizeCanvas(windowWidth, windowHeight);
};

function draw() {

  //Covers the whole background
  background(220);

  //Draw the background image
  if(CurrentBackgroundImage != undefined){
    image(CurrentBackgroundImage, 0, 0, windowWidth, windowHeight);
  };
  
  //Count the timer time
  CountTime();

  //Choose the tab to be counted
  if(TabID == HomeID){
    DrawTheHome();
  }else if(TabID == TimerID){
    DrawDefaultTimer();
  }else if(TabID == ListID && !NewTimerWindowStatus && !ShowManageTimerWindow){
    DrawTimerList();
  }else if(TabID == AboutID){
    DrawAbout();
  };

  //Count custom timer
  if(IsCustomTimerCounting.is){
    TimersArray[IsCustomTimerCounting.id].timepassed += deltaTime/1000;
    UpdateCustomTimerValues();
  };

  //Clean the new timer inputs
  if(!NewTimerWindowStatus && UploadImageButton != undefined){

    UploadNameInput.remove();
    UploadNameInput = undefined;

    UploadDescriptionInput.remove();
    UploadDescriptionInput = undefined;

    UploadImageButton.remove();
    UploadImageButton = undefined;
  }

  //Remove the input boxes
  if(TabID != TimerID){
    RemoveTimerInputs();
  };

  //Draw the add timer window
  if(NewTimerWindowStatus){

    DrawNewTimerWindow();
  };  

  //Drawa the timer management window
  if(ShowManageTimerWindow){

    DrawManageTimer();
  }else{
    ManageTimerDeleteInputs();
  };

  //Draw the main header
  DrawTheMainHeader();

  //Draw the UI elemnts
  for(button of UIelements){
    button.draw();
  };

};

function mousePressed(clickInfo){

  //Clicking event on the home page
  if(TabID == HomeID){
    PressedHomeWindow(clickInfo.buttons);
  };

  //Clicking event on the timer list
  if(TabID == ListID && !NewTimerWindowStatus && !ShowManageTimerWindow){
    PressedTimerList(clickInfo.buttons);
  };


  //Timer window clicking events
  if(TabID == TimerID && !NewTimerWindowStatus){

    TimerClickEvents(clickInfo.buttons);
  };

  //for the UI elements
  if(!NewTimerWindowStatus && !ShowManageTimerWindow && !ChangeImageWindow){

    for(button of UIelements){
      button.click1(clickInfo.buttons);
      button.click2(clickInfo.buttons);
    };
  };

  if(NewTimerWindowStatus){
    NewTimerClicked(clickInfo.buttons);
  };

  //About window clicking events
  if(TabID == AboutID && !NewTimerWindowStatus){

    AboutClickEvents(clickInfo.buttons);
  };

  //Clickin on timer manager window
  if(TabID == ListID && ShowManageTimerWindow){
    ManageTimerClick(clickInfo.buttons);
  };



};
