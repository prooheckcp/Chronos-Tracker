
//Images variables\\

    //Folder Location
    let folderLoc = './';

    //Big pictures
    let BackgroundImage;
    let BackgroundImage2;
    let BackgroundImage3;

    //logos
    let gitHubLogo;
    let LinkedInLogo;

    //Shapes
    let CircleButton;

//_________________\\

const loadTheImages = () => {

    //Big pictures
    BackgroundImage = loadImage('Databases/backgrounds/Defaultbackground1.jpg');
    BackgroundImage2 = loadImage('Databases/backgrounds/Defaultbackground2.jpg');
    BackgroundImage3 = loadImage('Databases/backgrounds/Defaultbackground3.jpg');

    //GitHub logo
    gitHubLogo = loadImage("project_code/assets/github.png");

    //Linkedin logo
    LinkedInLogo = loadImage("project_code/assets/LinkedIn.png");

    //Shapes
    CircleButton = loadImage("project_code/assets/Circle.png");

  //Load the images
  TimerBackgroundImage = loadImage(__dirname + '/project_code/assets/Panel_Dialogue.png');
  TimerImagePortrait = loadImage(__dirname + '/project_code/assets/Portrait_Player_Border_Grey.png')
  NoImageReplacer = loadImage(__dirname + '/project_code/assets/noimage.jpg');
  TimerNameImage = loadImage(__dirname + '/project_code/assets/Panel_Name.png');
  GreenButtonImage = loadImage(__dirname + '/project_code/assets/GreenButton.png');
  YellowButtonImage = loadImage(__dirname + '/project_code/assets/YellowButton.png');

};