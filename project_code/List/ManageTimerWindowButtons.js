//Variables\\

    //Close button
    let ManageTimerCloseButton;

    //Run/Stop button
    let ManageTimerRunButton;

    //Reset button
    let ManageTimerResetButton;

    //Delete Button
    let ManageTimerDeleteButton;

    //Timer Name Input
    let ManageTimerName;

    //Timer description Input
    let ManageTimerDesc;

    //Timer milliseconds input
    let ManageTimerMS;

    //Timer seconds input
    let ManageTimerS;

    //Timer minutes input
    let ManageTimerM;

    //Timer hours input
    let ManageTimerH;

    //Timer Counting
    let IsCustomTimerCounting = {is: false, id: 1};

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

    //Run timer button
    ManageTimerRunButton = new button1(0, 0, 75, 75);
    ManageTimerRunButton.color = {r: 2, g: 145, b: 0};
    ManageTimerRunButton.transparency = 175;
    ManageTimerRunButton.image = CircleButton;
    ManageTimerRunButton.text = 'Start';
    ManageTimerRunButton.textColor = {r: 0, g: 255, b: 0};
    ManageTimerRunButton.fontSize = 22;
    ManageTimerRunButton.addHovering(()=>{
        ManageTimerRunButton.x -= 5;
        ManageTimerRunButton.y -= 5;
        ManageTimerRunButton.w += 10;
        ManageTimerRunButton.h += 10;
    });
    ManageTimerRunButton.eventClick1(()=>{

        if(IsCustomTimerCounting.is){
            //In case the timer is running make it stop and change the button aspect
            IsCustomTimerCounting.is = false;
            ManageTimerRunButton.color = {r: 2, g: 145, b: 0};
            ManageTimerRunButton.textColor = {r: 0, g: 255, b: 0};
            ManageTimerRunButton.text = 'Start';


        }else{

            //In case the timer is not running make it start the counting and change the button aspect
            IsCustomTimerCounting.id = ManagedTimerOBJ;
            IsCustomTimerCounting.is = true;
            ManageTimerRunButton.color = {r: 145, g: 2, b: 0};
            ManageTimerRunButton.textColor = {r: 255, g: 43, b: 90};
            ManageTimerRunButton.text = 'Stop';
        };

    });

    //Reset timer button
    ManageTimerResetButton = new button1(0, 0, 75, 75);
    ManageTimerResetButton.color = {r: 128, g: 128, b: 128};
    ManageTimerResetButton.transparency = 175;
    ManageTimerResetButton.image = CircleButton;
    ManageTimerResetButton.text = 'Reset';
    ManageTimerResetButton.textColor = {r: 255, g: 255, b: 255};
    ManageTimerResetButton.fontSize = 22;
    ManageTimerResetButton.addHovering(()=>{
        ManageTimerResetButton.x -= 5;
        ManageTimerResetButton.y -= 5;
        ManageTimerResetButton.w += 10;
        ManageTimerResetButton.h += 10;
    });
    ManageTimerResetButton.eventClick1(()=>{

        let LocalBoolean = window.confirm('Do you wish to reset this timer?\nOk to reset, cancel to cancel the proccess');

        if(LocalBoolean){  

            //Reset the timer value
            TimersArray[ManagedTimerOBJ].timepassed = 0;

            //Update the values on the UI
            UpdateCustomTimerValues();
        };

    });

    //Delete timer button
    ManageTimerDeleteButton = new button1(0, 0, 75, 75);
    ManageTimerDeleteButton.color = {r: 145, g: 2, b: 0};
    ManageTimerDeleteButton.transparency = 175;
    ManageTimerDeleteButton.image = CircleButton;
    ManageTimerDeleteButton.text = 'Delete';
    ManageTimerDeleteButton.textColor = {r: 255, g: 43, b: 90};
    ManageTimerDeleteButton.fontSize = 22;
    ManageTimerDeleteButton.addHovering(()=>{
        ManageTimerDeleteButton.x -= 5;
        ManageTimerDeleteButton.y -= 5;
        ManageTimerDeleteButton.w += 10;
        ManageTimerDeleteButton.h += 10;
    });
    ManageTimerDeleteButton.eventClick1(()=>{

        let LocalBoolean = window.confirm('Do you wish to delete this timer?\nOk to delete, cancel to cancel the proccess');
        
        if(LocalBoolean){

            let LocalTimerOBJ = ManagedTimerOBJ;

            ShowManageTimerWindow = false;
            ManagedTimerOBJ = undefined;

            alert('The timer has been removed from your list!');

            if(LocalTimerOBJ == 0){
                TimersArray.splice(LocalTimerOBJ, LocalTimerOBJ + 1);
                TimersImages.splice(LocalTimerOBJ, LocalTimerOBJ + 1);  

            }else{

                TimersArray.splice(LocalTimerOBJ, LocalTimerOBJ);
                TimersImages.splice(LocalTimerOBJ, LocalTimerOBJ);                
            };



            


        };


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

    //Create the timer milliseconds
    if(ManageTimerMS == undefined){

        ManageTimerMS = AddCustomTimerInputs();

    };

    //Create the timer seconds
    if(ManageTimerS == undefined){
        ManageTimerS = AddCustomTimerInputs();
    };

    //Create the timer minutes
    if(ManageTimerM == undefined){
        ManageTimerM = AddCustomTimerInputs();
    };

    //Create the timer hours
    if(ManageTimerH == undefined){
        ManageTimerH = AddCustomTimerInputs();
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

    //Destroy the timer milliseconds
    if(ManageTimerMS != undefined){

        ManageTimerMS.remove();
        ManageTimerMS = undefined;

    };

    //Create the timer seconds
    if(ManageTimerS != undefined){
        ManageTimerS.remove();
        ManageTimerS = undefined;
    };

    //Create the timer minutes
    if(ManageTimerM != undefined){
        ManageTimerM.remove();
        ManageTimerM = undefined;
    };

    //Create the timer hours
    if(ManageTimerH != undefined){
        ManageTimerH.remove();
        ManageTimerH = undefined;
    };

};

const ManageTimerClick = info =>{

    //Closing window event
    ManageTimerCloseButton.click1(info);
    ManageTimerResetButton.click1(info);
    ManageTimerDeleteButton.click1(info);
    ManageTimerRunButton.click1(info);
};