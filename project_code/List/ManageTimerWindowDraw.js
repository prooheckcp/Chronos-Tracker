//Variables\\

    //Wether the window is displayed or not
    let ShowManageTimerWindow = true;

    //The Window properties
    let ManageTimerWindowSettings = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };

    //Current timer that is being managed
    let ManagedTimerOBJ = 1;

    //Timer Is Counting
    let TimerRunning = false;

//__________\\


const DrawManageTimer = () =>{

    //Set the rectangle properties
    SetManageTimerWindowConf(); 

    //Draw the rectangle
    fill(0, 150);
    rect(ManageTimerWindowSettings.x, ManageTimerWindowSettings.y, ManageTimerWindowSettings.w, ManageTimerWindowSettings.h);

    //Close Button\\

        //Set close button size
        ManageTimerCloseButton.w = 65;
        ManageTimerCloseButton.h = 65;

        //Set close button position
        ManageTimerCloseButton.x = ManageTimerWindowSettings.x + ManageTimerWindowSettings.w - ManageTimerCloseButton.w - 10;
        ManageTimerCloseButton.y = ManageTimerWindowSettings.y + 10;

        //Call the draw
        ManageTimerCloseButton.draw();
    //_____________\\

    //In case it cannot find the timer then do not continue
    if(ManagedTimerOBJ == undefined || TimersArray[ManagedTimerOBJ] == undefined){
        return;
    };

    //Draw the timer name ||

        //Get the name
        let LocalName = TimersArray[ManagedTimerOBJ].name;

        //Draw the inputs
        ManageTimerInputs();

        //Set the name input properties
        ManageTimerName.position(ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 - 200, ManageTimerWindowSettings.y + 20);
        ManageTimerName.size(400, 50);

        //Set the name
        if(ManageTimerName.elt.value == '__________'){
            ManageTimerName.elt.value = LocalName;
        };
    //____________________||

    //Draw the timer desc ||

        //Get the description
        let LocalDesc = TimersArray[ManagedTimerOBJ].desc;

        //Set the description input properties
        ManageTimerDesc.position(ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 - 350, ManageTimerWindowSettings.y + 100);
        ManageTimerDesc.size(700, 50);

        //Set the desc
        if(ManageTimerDesc.elt.value == '__________'){
            ManageTimerDesc.elt.value = LocalDesc;
        };

    //____________________||

    //Draw the timer timer||

        //Draw the milliseconds
        ManageTimerMS.position(ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 + 130, ManageTimerWindowSettings.y + 175);

        //Draw the seconds
        ManageTimerS.position(ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 + 10, ManageTimerWindowSettings.y + 175);
        
        //Draw the minutes
        ManageTimerM.position(ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 - 110, ManageTimerWindowSettings.y + 175);

        //Draw the hours
        ManageTimerH.position(ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 - 230, ManageTimerWindowSettings.y + 175);

        //Draw sepereation
        textFont(ArialBold);
        textAlign(CENTER, TOP);
        textSize(80);
        text(':', ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 - 120, ManageTimerWindowSettings.y + 175);
        text(':', ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2, ManageTimerWindowSettings.y + 175);
        text(',', ManageTimerWindowSettings.x + ManageTimerWindowSettings.w/2 + 120, ManageTimerWindowSettings.y + 175);
    //____________________||

};

const SetManageTimerWindowConf = () =>{

    //Set the window size
    ManageTimerWindowSettings.w = 850;
    ManageTimerWindowSettings.h = 450;

    //Set the window position
    ManageTimerWindowSettings.x = windowWidth/2 - ManageTimerWindowSettings.w/2;
    ManageTimerWindowSettings.y = headerSettings.height + ((windowHeight - headerSettings.height)/2 - ManageTimerWindowSettings.h/2);

}; 