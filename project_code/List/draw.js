let TimerListSizes = {
x: 0,
y: 0,
w: 0,
h: 0
};

const DrawTimerList = () =>{

    //Update the window configurations
    UpdateTimerListSizes();

    //Draw the window background
    fill(0, 100);
    rect(TimerListSizes.x, TimerListSizes.y, TimerListSizes.w, TimerListSizes.h);

    //Draw the add button
    AddANewTimer.x = TimerListSizes.x - 65 - 10;
    AddANewTimer.y = TimerListSizes.y + TimerListSizes.h - 65;
    AddANewTimer.w = 65;
    AddANewTimer.h = 65;
    AddANewTimer.draw();

};

const UpdateTimerListSizes = () =>{

    //Set the variables
    TimerListSizes.w = 800;    
    TimerListSizes.h = 400;    
    TimerListSizes.x = windowWidth/2 - TimerListSizes.w/2;
    TimerListSizes.y = headerSettings.height + (windowHeight - headerSettings.height)/2 - TimerListSizes.h/2;



};