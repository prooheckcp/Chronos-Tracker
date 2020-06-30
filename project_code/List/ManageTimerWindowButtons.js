//Variables\\

    //Close button
    let ManageTimerCloseButton;

    //Timer Name Input
    let ManageTimerName;

    //Timer description Input
    let ManageTimerDesc;

//__________\\

const SetupManageTimerButtons = () =>{

    //Close button
    ManageTimerCloseButton = new button1(0, 0, 50, 50);
    ManageTimerCloseButton.image = CircleButton;
    ManageTimerCloseButton.color = {r: 145, g: 2, b: 0};
    ManageTimerCloseButton.text = 'X';
    ManageTimerCloseButton.fontSize = 40;
    ManageTimerCloseButton.transparency = 200;
    ManageTimerCloseButton.addHovering(()=>{
        ManageTimerCloseButton.x -= 5;
        ManageTimerCloseButton.y -= 5;
        ManageTimerCloseButton.w += 10;
        ManageTimerCloseButton.h += 10;
    });
    ManageTimerCloseButton.eventClick1(()=>{

        //Reset variables in order to properly close the window
        ShowManageTimerWindow = false;
        ManagedTimerOBJ = undefined;

    });

};

const ManageTimerInputs = () =>{

    //Create the timer name input
    if(ManageTimerName == undefined){

        ManageTimerName = createInput('__________');
        ManageTimerName.input(function(){
            TimersArray[ManagedTimerOBJ].name = this.value();
        });
        ManageTimerName.style('background-color', 'black');
        ManageTimerName.style('background', 'rgba(0, 0, 0, 0.4)');
        ManageTimerName.style('border', 'none');
        ManageTimerName.style('font-size', '30px');
        ManageTimerName.style('text-align', 'center');
        ManageTimerName.style('color', '#ffffff');
        ManageTimerName.style('font-weight', 'bold');
    };

    //Create the timer description input
    if(ManageTimerDesc == undefined){

        ManageTimerDesc = createInput('__________');
        ManageTimerDesc.input(function(){
            TimersArray[ManagedTimerOBJ].desc = this.value();
        });
        ManageTimerDesc.style('background-color', 'black');
        ManageTimerDesc.style('background', 'rgba(0, 0, 0, 0.4)');
        ManageTimerDesc.style('border', 'none');
        ManageTimerDesc.style('font-size', '30px');
        ManageTimerDesc.style('text-align', 'center');
        ManageTimerDesc.style('color', '#ffffff');
        ManageTimerDesc.style('font-weight', 'bold');
    };

};

const ManageTimerDeleteInputs = () =>{

    //Destroy the timer name input
    if(ManageTimerName != undefined){

        ManageTimerName.remove();
        ManageTimerName = undefined;
    };

    //Destroy the timer description input 
    if(ManageTimerDesc != undefined){


        ManageTimerDesc.remove();
        ManageTimerDesc = undefined;

    };

};

const ManageTimerClick = info =>{

    //Closing window event
    ManageTimerCloseButton.click1(info);

};