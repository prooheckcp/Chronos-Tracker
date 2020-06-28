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
        AddANewTimer.image = GreenButtonImage;
        AddANewTimer.transparency = 255;
        AddANewTimer.color = {r: 255, g: 255, b: 255};
        AddANewTimer.text = '+';
        AddANewTimer.fontSize = 50;
        AddANewTimer.textColor = {r: 40, g: 40, b: 40};
        AddANewTimer.font = AntiCoronaFont;
        AddANewTimer.addHovering(()=>{
            AddANewTimer.w += 10;
            AddANewTimer.h += 10;
            AddANewTimer.x -= 5;
            AddANewTimer.y -= 5;      
            tint(2, 145, 0);   
        });
        AddANewTimer.eventClick1(()=>{
            NewTimerWindowStatus = true;
        });
    //----------------------------\\    

    //Move to the next page\\

        NextPageList = new button1(0, 0, 50, 50);
        NextPageList.image = YellowButtonImage;
        NextPageList.transparency = 255;
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
            TimerListPage++;
        });   
    //_______________________\\


    //Move to the last page\\

    LastPageList = new button1(0, 0, 50, 50);
    LastPageList.image = YellowButtonImage;
    LastPageList.transparency = 255;
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
        TimerListPage--;
    });   
//_______________________\\


};

const PressedTimerList = (info) => {

    //Add a new timer button was pressed
    AddANewTimer.click1(info);
    NextPageList.click1(info);
    LastPageList.click1(info);

};