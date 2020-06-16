
//Images variables\\

    //Folder Location
    let folderLoc = './';

    //Big pictures
    let BackgroundImage;

    //logos
    let gitHubLogo;
//_________________\\

const loadTheImages = () => {

    //Big pictures
    BackgroundImage = loadImage('https://cdn.discordapp.com/attachments/670023265455964198/722471929122127882/background.jpg');

    //GitHub logo
    gitHubLogo = loadImage("project_code/assets/github.png");
};