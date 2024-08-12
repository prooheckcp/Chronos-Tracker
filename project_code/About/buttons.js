//Variables\\

    let GitHubButton;
    let LinkedInButton;

//----------\\

const LoadAboutButtons = () =>{

    //GitHubButton\\

        GitHubButton = new button1(0, 0, 75, 75);
        GitHubButton.image = gitHubLogo;
        GitHubButton.transparency = 255;
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
    
    //LinkedIn Logo\\

        LinkedInButton = new button1(0, 0, 85, 75);
        LinkedInButton.image = LinkedInLogo;
        LinkedInButton.transparency = 255;
        LinkedInButton.eventClick1(()=>{
            window.open('https://www.linkedin.com/in/vasco-miguel-veenstra-soares-564682194/');
        });
        LinkedInButton.addHovering(()=>{
            LinkedInButton.x -= 5;
            LinkedInButton.y -= 5;
            LinkedInButton.w += 10;
            LinkedInButton.h += 10;
        });      
    //--------------\\

};

const AboutClickEvents = (info) =>{

    //Github logo
    GitHubButton.click1(info);

    //linkedin logo
    LinkedInButton.click1(info);
};