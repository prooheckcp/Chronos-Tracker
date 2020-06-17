const AboutWindowSettings = {
    width: 850,
    heigth: 450,
    x: 0,
    y: 0
};

const DrawAbout = () =>{

    //background square

    AboutWindowSettings.x = windowWidth/2 - AboutWindowSettings.width/2;
    AboutWindowSettings.y = (windowHeight - headerSettings.height)/2 - AboutWindowSettings.heigth/2 + headerSettings.height;

    fill(0, 100); 
    rect(AboutWindowSettings.x, AboutWindowSettings.y, AboutWindowSettings.width, AboutWindowSettings.heigth);
    fill(255);
    textSize(60);
    text('About', windowWidth/2 - AboutWindowSettings.width/2 + AboutWindowSettings.width/2, (windowHeight - headerSettings.height)/2 - AboutWindowSettings.heigth/2 + headerSettings.height + 40);
    textFont(AntiCoronaFont);
    textAlign(LEFT, TOP);
    textSize(22);
    text('This app has been developed by prooheckcp (Miguel Soares) with the usage of\nElectron and P5.\n\nThis app was designed with the aim to help tracking time instead of just counting it\nonce as with a regular timer.\n\nThe code is fully open source and can be accessed on github.com. Although not \nnecessary credit would very much be appreciated (in case the code is reused).', windowWidth/2 - AboutWindowSettings.width/2 + 10, (windowHeight - headerSettings.height)/2 - AboutWindowSettings.heigth/2 + headerSettings.height + 120);

    //Github
    GitHubButton.w = 60;
    GitHubButton.h = 60;
    GitHubButton.x = AboutWindowSettings.x + 10;
    GitHubButton.y  = AboutWindowSettings.y + AboutWindowSettings.heigth - GitHubButton.h - 10;
    GitHubButton.draw();

    //LinkedIn
    LinkedInButton.w = 70;
    LinkedInButton.h = 60;
    LinkedInButton.x = AboutWindowSettings.x + 10 + LinkedInButton.w + 30;
    LinkedInButton.y  = AboutWindowSettings.y + AboutWindowSettings.heigth - LinkedInButton.h - 10;
    LinkedInButton.draw();
};