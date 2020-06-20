//Variables\\

    //Add timer
    let AddANewTimer;

//----------\\

const LoadListButtons = () =>{

    //Add a new timer to the list\\

        AddANewTimer = new button1(0, 0, 50, 50);
        AddANewTimer.image = CircleButton;
        AddANewTimer.transparency = 175;
        AddANewTimer.color = {r: 2, g: 145, b: 0};
        AddANewTimer.text = '+';
        AddANewTimer.fontSize = 70;
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

};

const PressedTimerList = (info) => {

    //Add a new timer button was pressed
    AddANewTimer.click1(info);

};