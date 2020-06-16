//Variables\\

    let GitHubButton;

//----------\\

const LoadAboutButtons = () =>{

    //GitHubButton\\

        GitHubButton = new button1(0, 0, 75, 75);
        GitHubButton.image = gitHubLogo;
        GitHubButton.eventClick1(()=>{
            window.open('https://github.com/prooheckcp/Chronos-Tracker');
        });
        GitHubButton.addHovering(()=>{
            GitHubButton.x -= 5;
            GitHubButton.y -= 5;
            GitHubButton.w += 10;
            GitHubButton.h += 10;
        });
    //-------------\\


};

const AboutClickEvents = (info) =>{

    //Github logo
    GitHubButton.click1(info);

};