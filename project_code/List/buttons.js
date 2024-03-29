//Variables\\

    //Add timer
    let AddANewTimer;

    //NextPage
    let NextPageList;

    //LastPage
    let LastPageList;

//----------\\

const LoadListButtons = () =>{

    //Add a new timer to the list\\

        AddANewTimer = new button1(0, 0, 50, 50);
        //AddANewTimer.image = GreenButtonImage;
        AddANewTimer.image = CircleButton;
        AddANewTimer.transparency = 200;
        AddANewTimer.color = {r: 0, g: 175, b: 0};
        AddANewTimer.text = '+';
        AddANewTimer.fontSize = 50;
        AddANewTimer.textColor = {r: 40, g: 40, b: 40};
        AddANewTimer.font = AntiCoronaFont;
        AddANewTimer.addHovering(()=>{
            AddANewTimer.w += 10;
            AddANewTimer.h += 10;
            AddANewTimer.x -= 5;
            AddANewTimer.y -= 5;      
            tint(2, 220, 0);   
        });
        AddANewTimer.eventClick1(()=>{
            NewTimerWindowStatus = true;
        });
    //----------------------------\\    

    //Move to the next page\\

        NextPageList = new button1(0, 0, 50, 50);
        //NextPageList.image = YellowButtonImage;
        NextPageList.image = CircleButton;
        NextPageList.transparency = 200;
        NextPageList.color = {r: 255, g: 255, b: 255};
        NextPageList.textColor = {r: 40, g: 40, b: 40};
        NextPageList.text = '>';
        NextPageList.fontSize = 40;
        NextPageList.font = AntiCoronaFont;
        NextPageList.addHovering(()=>{
            NextPageList.w += 10;
            NextPageList.h += 10;
            NextPageList.x -= 5;
            NextPageList.y -= 5;      
            tint(144, 145, 0);   
        });
        NextPageList.eventClick1(()=>{

            if(TimerListPage * 4 < TimersArray.length){ 
                TimerListPage++;
            };

        });   
    //_______________________\\


    //Move to the last page\\

    LastPageList = new button1(0, 0, 50, 50);
    //LastPageList.image = YellowButtonImage;
    LastPageList.image = CircleButton;
    LastPageList.transparency = 200;
    LastPageList.color = {r: 255, g: 255, b: 255};
    LastPageList.text = '<';
    LastPageList.fontSize = 40;
    LastPageList.textColor = {r: 40, g: 40, b: 40};
    LastPageList.font = AntiCoronaFont;
    LastPageList.addHovering(()=>{
        LastPageList.w += 10;
        LastPageList.h += 10;
        LastPageList.x -= 5;
        LastPageList.y -= 5;      
        tint(144, 145, 0);   
    });
    LastPageList.eventClick1(()=>{

        if(TimerListPage > 1){
            TimerListPage--;
        };
    });   
//_______________________\\


};

const PressedTimerList = (info) => {

    //Add a new timer button was pressed
    AddANewTimer.click1(info);
    NextPageList.click1(info);
    LastPageList.click1(info);

    for(let i = (TimerListPage * 4) - 4; i < (TimerListPage * 4); i++){


        //Check if the panel exists
        if(TimersArray[i] == undefined || ShowManageTimerWindow || NewTimerWindowStatus){
            return;
        };


        //Get the panel position
        let j = i - (TimerListPage * 4) + 4;

        //Check if the mouse is within the panels position
        if(CheckIfMouseInRect( {x: TimerListSizes.x, y: TimerListSizes.y + (j * 100), w: 800, h: 100}, mouseX, mouseY)){
            
            //Open the timers window
            ShowManageTimerWindow = true;
            ManagedTimerOBJ = i;
            TappingSound.play();

        };
    };

};