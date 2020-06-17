//Variables\\

    //Resume button
    let ResumeButton;

    //Reset button
    let ResetButton;

//----------\\

const CreateTimerButtons = () =>{
    
    //Resume button
    ResumeButton = new button1(0, 0, 75, 75);
    ResumeButton.color = {r: 2, g: 145, b: 0};
    ResumeButton.transparency = 175;
    ResumeButton.image = CircleButton;
    ResumeButton.text = 'Start';
    ResumeButton.textColor = {r: 0, g: 255, b: 0};
    ResumeButton.fontSize = 22;
    ResumeButton.addHovering(()=>{
        ResumeButton.x -= 5;
        ResumeButton.y -= 5;
        ResumeButton.w += 10;
        ResumeButton.h += 10;
    });
    ResumeButton.eventClick1(()=>{

        if(!TimerIsRunning){
            ResumeButton.text = 'Stop';
            ResumeButton.color = {r: 145, g: 2, b: 0};
            ResumeButton.textColor = {r: 255, g: 43, b: 90};
        }else{
            ResumeButton.text = 'Start';
            ResumeButton.color = {r: 2, g: 145, b: 0};
            ResumeButton.textColor = {r: 0, g: 255, b: 0};           
        };

        TimerIsRunning = !TimerIsRunning;

    });

    //Reset button
    ResetButton = new button1(0, 0, 75, 75);
    ResetButton.color = {r: 128, g: 128, b: 128};
    ResetButton.transparency = 175;
    ResetButton.image = CircleButton;
    ResetButton.text = 'Reset';
    ResetButton.textColor = {r: 255, g: 255, b: 255};
    ResetButton.fontSize = 22;
    ResetButton.addHovering(()=>{
        ResetButton.x -= 5;
        ResetButton.y -= 5;
        ResetButton.w += 10;
        ResetButton.h += 10;
    });
    ResetButton.eventClick1(()=>{

        TimerCount = 0;
        UpdateTimerValues();

    });
};

const TimerClickEvents = (info) =>{

    ResumeButton.click1(info);
    ResetButton.click1(info);

};