//Variables\\

    //Timer list data
    let TimerListSizes = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
    };

    //Timer list Page
    let TimerListPage = 1;

//__________\\



async function DrawTimerList(){

    //Update the window configurations
    UpdateTimerListSizes();

    //Draw the window background
    fill(0, 50);
    rect(TimerListSizes.x, TimerListSizes.y, TimerListSizes.w, TimerListSizes.h);

    //Draw the add button
    AddANewTimer.x = TimerListSizes.x - 65 - 10;
    AddANewTimer.y = TimerListSizes.y + TimerListSizes.h - 140;
    AddANewTimer.w = 65;
    AddANewTimer.h = 65;
    AddANewTimer.draw();

    //Draw the next page button
    NextPageList.x = TimerListSizes.x + TimerListSizes.w + 10;
    NextPageList.y = TimerListSizes.y + TimerListSizes.h - 65;
    NextPageList.w = 65;
    NextPageList.h = 65;
    NextPageList.draw();

    //Draw the previous page button
    LastPageList.x = TimerListSizes.x - 65 - 10;
    LastPageList.y = TimerListSizes.y + TimerListSizes.h - 65;
    LastPageList.w = 65;
    LastPageList.h = 65;
    LastPageList.draw();


    //Draw the timer
    for(let i = (TimerListPage * 4) - 4; i < (TimerListPage * 4); i++){

        let j = i - (TimerListPage * 4) + 4;
        DrawTimerListTab(i, j)

    };

};

async function DrawTimerListTab (i, j){
    if(TimersArray[i] == undefined){
        return;
    };

    //Draw background
    //fill(255, 255)

    let LocalHovered = false;

    if(CheckIfMouseInRect( {x: TimerListSizes.x, y: TimerListSizes.y + (j * 100), w: 800, h: 100}, mouseX, mouseY)){
        tint(223, 237, 62);
        LocalHovered = true;
    };

    image(TimerBackgroundImage, TimerListSizes.x + 100, TimerListSizes.y + (j * 100), 700, 100);

    noTint();

    //Draw the timer image
    if(TimersImages[i] != undefined){
        image(TimersImages[i], TimerListSizes.x, TimerListSizes.y + (j * 100), 100, 100);
    }else{
        image(NoImageReplacer, TimerListSizes.x, TimerListSizes.y + (j * 100), 100, 100);
    };
    
    if(LocalHovered){
        image(TimerImagePortrait, TimerListSizes.x - 8.5, TimerListSizes.y + (j * 100) - 8.5, 115, 115);
    };

    //Draw the timer name
    image(TimerNameImage, TimerListSizes.x + 100, TimerListSizes.y + (j * 100) - 15, 225, 35);
    fill(255, 255);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(ArialBold);
    text(TimersArray[i].name, TimerListSizes.x + 212.5, TimerListSizes.y + (j * 100) - 2.5);

    //Draw the timer description
    textAlign(LEFT, CENTER);
    fill(0);
    textSize(22);
    text(TimersArray[i].desc, TimerListSizes.x + 120, TimerListSizes.y + (j * 100) + 30);

    //Draw the timer time
    textSize(50);

    
    let LocalMiliSeconds = Math.floor((TimersArray[i].timepassed - Math.floor(TimersArray[i].timepassed)) * 100);
    let LocalSeconds = Math.floor(TimersArray[i].timepassed) - Math.floor(TimersArray[i].timepassed/60) * 60;
    let LocalMinutes = Math.floor(TimersArray[i].timepassed/60) - Math.floor(TimersArray[i].timepassed/3600) * 60;
    let LocalHours = Math.floor(TimersArray[i].timepassed/3600);

    if(LocalMiliSeconds < 10){
        LocalMiliSeconds = '0' + LocalMiliSeconds;
    };

    if(LocalSeconds < 10){
        LocalSeconds = '0' + LocalSeconds;
    };

    if(LocalMinutes < 10){
        LocalMinutes = '0' + LocalMinutes;
    };

    if(LocalHours < 10){
        LocalHours = '0' + LocalHours;
    };

    let LocalTimeString = LocalHours + ':' + LocalMinutes + ':' + LocalSeconds + ':' + LocalMiliSeconds;

    text( LocalTimeString, TimerListSizes.x + 120, TimerListSizes.y + (j * 100) + 60);
};

const UpdateTimerListSizes = () =>{

    //Set the variables
    TimerListSizes.w = 800;    
    TimerListSizes.h = 400;    
    TimerListSizes.x = windowWidth/2 - TimerListSizes.w/2;
    TimerListSizes.y = headerSettings.height + (windowHeight - headerSettings.height)/2 - TimerListSizes.h/2;



};