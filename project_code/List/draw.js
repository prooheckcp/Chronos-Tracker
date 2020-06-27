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
    fill(0, 50);
    rect(TimerListSizes.x, TimerListSizes.y, TimerListSizes.w, TimerListSizes.h);

    //Draw the add button
    AddANewTimer.x = TimerListSizes.x - 65 - 10;
    AddANewTimer.y = TimerListSizes.y + TimerListSizes.h - 65;
    AddANewTimer.w = 65;
    AddANewTimer.h = 65;
    AddANewTimer.draw();

    //Draw the timer
    for(let i = 0; i < TimersArray.length; i++){

        let j = (TimersArray.length/4) + i;
        
        //Draw background
        fill(255, 255)
        image(TimerBackgroundImage, TimerListSizes.x + 100, TimerListSizes.y + (i * 100), 700, 100);

        //Draw the timer image
        if(TimersImages[i] != undefined){
            image(TimersImages[i], TimerListSizes.x, TimerListSizes.y + (i * 100), 100, 100);
        }else{
            image(NoImageReplacer, TimerListSizes.x, TimerListSizes.y + (i * 100), 100, 100);
        };
        image(TimerImagePortrait, TimerListSizes.x - 8.5, TimerListSizes.y + (i * 100) - 8.5, 115, 115);

    };

};

const UpdateTimerListSizes = () =>{

    //Set the variables
    TimerListSizes.w = 800;    
    TimerListSizes.h = 400;    
    TimerListSizes.x = windowWidth/2 - TimerListSizes.w/2;
    TimerListSizes.y = headerSettings.height + (windowHeight - headerSettings.height)/2 - TimerListSizes.h/2;



};