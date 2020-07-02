//Variables\\

    let TimerIsRunning = false;

    //Count the time
    let TimerCount = 0;

    let SecondsInput;
    let MiliSecondsInput;
//----------\\

//UI elements\\

    let HoursINP;
    let MinutesINP;
    let SecondsINP;
    let MilliSecondsINP;
//------------\\

const DrawDefaultTimer = () =>{

    if(SecondsINP == undefined){  

        SecondsINP = AddTimerInputs(windowWidth/2 + 10, 200);
        MilliSecondsINP = AddTimerInputs(windowWidth/2 + 130, 200);
        MinutesINP = AddTimerInputs(windowWidth/2 - 110, 200);
        HoursINP = AddTimerInputs(windowWidth/2 - 330, 200, 'y');        

        UpdateTimerValues();
    }else{

        HoursINP.position(windowWidth/2 - 330, 200);
        MinutesINP.position(windowWidth/2 - 110, 200);
        SecondsINP.position(windowWidth/2 + 10, 200);
        MilliSecondsINP.position(windowWidth/2 + 130, 200);

        //Background
        fill(0, 100);
        rect(windowWidth/2 - 220, 290, 440, 95, 20);

        //Draw the buttons\\

            //resume button
            ResumeButton.w = 75;
            ResumeButton.h = 75;
            ResumeButton.x = windowWidth/2 + 125;
            ResumeButton.y = 300;
            ResumeButton.draw();

            //reset button
            ResetButton.w = 75;
            ResetButton.h = 75;
            ResetButton.x = windowWidth/2 - 200;
            ResetButton.y = 300;
            ResetButton.draw();
        //-----------------\\

        //Set the text seperations\\

            fill(255);
            textFont(ArialBold);
            textSize(80);
            textAlign(CENTER, TOP);
            text(':', windowWidth/2, 200);
            text(':', windowWidth/2 - 120, 200);
            text(',', windowWidth/2 + 120, 200);        
        //-------------------------\\


    };


};

const CountTime = () =>{

    if(TimerIsRunning){
        TimerCount += deltaTime/1000;
        UpdateTimerValues();
    };

};

//Create the main timer inputs
const AddTimerInputs = (x, y, response) =>{

    let InpVar;
    InpVar = createInput('00');
    InpVar.size(100, 100);
    InpVar.position(x, y);
    InpVar.style('background-color', 'black');
    InpVar.style('background', 'transparent');
    InpVar.style('border', 'none');
    InpVar.style('font-size', '80px');
    InpVar.style('text-align', 'center');
    InpVar.style('color', '#ffffff');
    InpVar.style('font-weight', 'bold');
    InpVar.input(UpdateTimerNumbersINP);

    if(response == 'y'){
        InpVar.style('text-align', 'right');
        InpVar.size(200, 100);
    };

    return InpVar;

};

//Create the custom timers input
const AddCustomTimerInputs = (x, y, response) =>{

    let InpVar;
    InpVar = createInput('00');
    InpVar.size(100, 100);
    InpVar.position(x, y);
    InpVar.style('background-color', 'black');
    InpVar.style('background', 'transparent');
    InpVar.style('border', 'none');
    InpVar.style('font-size', '80px');
    InpVar.style('text-align', 'center');
    InpVar.style('color', '#ffffff');
    InpVar.style('font-weight', 'bold');
    InpVar.input(UpdateCustomTimerNumbersINP);

    if(response == 'y'){
        InpVar.style('text-align', 'right');
        InpVar.size(200, 100);
    };

    return InpVar;

};

const RemoveTimerInputs = () =>{

    if(SecondsINP != undefined){
        
        SecondsINP.remove();
        MilliSecondsINP.remove();
        MinutesINP.remove();
        HoursINP.remove();

        MilliSecondsINP = undefined;
        SecondsINP = undefined;
        MinutesINP = undefined;
        HoursINP = undefined;
    };

};

const UpdateTimerValues = () =>{

        

        if(SecondsINP == undefined){

            return;
        };

            
        //Take care of the seconds
        let LocalSeconds = Math.floor(TimerCount) - Math.floor(TimerCount/60) * 60;
        
        //Set the seconds
        if(LocalSeconds < 10){
            SecondsINP.elt.value = '0' + LocalSeconds;
        }else{

            SecondsINP.elt.value = LocalSeconds;
        };
        //Take care of the milliseconds
        let LocalMiliSeconds = Math.floor((TimerCount - Math.floor(TimerCount)) * 100);

        //Set the miliseconds
        if(LocalMiliSeconds < 10){
            MilliSecondsINP.elt.value = '0' + LocalMiliSeconds;
        }else{
            MilliSecondsINP.elt.value = LocalMiliSeconds;
        };


        //Take care of the minutes
        let LocalMinutes = Math.floor(TimerCount/60) - Math.floor(TimerCount/3600) * 60;

        //Set the minutes
        if(LocalMinutes < 10){
            MinutesINP.elt.value = '0' + LocalMinutes;
        }else{
            MinutesINP.elt.value = LocalMinutes;
        };

        //Take care of the hours
        let LocalHours = Math.floor(TimerCount/3600);
        
        //Set the hours
        if(LocalHours < 10){
            HoursINP.elt.value = '0' + LocalHours;
        }else{
            HoursINP.elt.value = LocalHours;
        };
};


function UpdateTimerNumbersINP(){
    if(!(isNaN(Number(this.value())))){
        
        //Equation here
        let LocalH = Number(HoursINP.elt.value);
        let LocalM = Number(MinutesINP.elt.value);
        let LocalS = Number(SecondsINP.elt.value);
        let LocalMS = Number(MilliSecondsINP.elt.value);
        let CalculateAmount = LocalH * 3600 + LocalM * 60 + LocalS +  (LocalMS/100);
        if(CalculateAmount != TimerCount){
            TimerCount = Number(CalculateAmount);
            UpdateTimerValues();
        };
    }else{
        UpdateTimerValues();
    };
};

//Update the timer values of the timer
function UpdateCustomTimerNumbersINP(){
    if(!(isNaN(Number(this.value())))){
        
        //Equation here
        let CalculateAmount = ManageTimerH.elt.value * 3600 + ManageTimerM.elt.value * 60 + ManageTimerS.elt.value +  (ManageTimerMS.elt.value/100);
        if(CalculateAmount != TimerCount){
            TimersArray[ManagedTimerOBJ].timepassed = Number(CalculateAmount);
            UpdateCustomTimerValues();
        };
    }else{
        UpdateCustomTimerValues();
    };
};


//To do
const UpdateCustomTimerValues = () =>{

};

