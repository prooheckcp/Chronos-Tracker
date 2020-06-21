//Variables\\
    
    //WindowsStatus
    let NewTimerWindowStatus = true;

    //Window configurations
    let NewTimerWindowConfig = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };

//----------\\

const LoadNewTimerButtons = () =>{

};

const DrawNewTimerWindow = () =>{

    //Set the window properties
    SetNewTimerWindowConf();

    //Just for testing
    fill(0, 150);
    rect(NewTimerWindowConfig.x, NewTimerWindowConfig.y, NewTimerWindowConfig.w, NewTimerWindowConfig.h);

    //Close Button


};


const SetNewTimerWindowConf = () =>{


    //Size
    NewTimerWindowConfig.w = 500;
    NewTimerWindowConfig.h = 300;    
    
    //Position
    NewTimerWindowConfig.x = windowWidth/2 - NewTimerWindowConfig.w/2;
    NewTimerWindowConfig.y = headerSettings.height;


};

const NewTimerClicked = info =>{

};