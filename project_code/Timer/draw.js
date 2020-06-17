//Variables\\

    let TimerIsRunning = false;

    //Count the time
    let TimerCount = 0;

    let SecondsInput;
    let MiliSecondsInput;
//----------\\

//UI elements\\

    let SecondsINP;
    let MilliSecondsINP;
//------------\\

const DrawDefaultTimer = () =>{

    if(SecondsINP == undefined){    
        SecondsINP = AddTimerInputs(windowWidth/2 -50, 100);
        MilliSecondsINP = AddTimerInputs(windowWidth/2 -50, 100);
    }else{

        //Take care of the seconds
        let LocalSeconds = Math.floor(TimerCount);
        SecondsINP.position(windowWidth/2 -50, 100);

        //Set the seconds
        if(LocalSeconds < 10){
            SecondsINP.elt.value = '0' + LocalSeconds;
        }else{
            SecondsINP.elt.value = LocalSeconds;
        };
        
    };


};

const CountTime = () =>{

    if(TimerIsRunning){
        TimerCount += deltaTime/1000;
    };

};

const AddTimerInputs = (x, y) =>{

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

    return InpVar;

};

const RemoveTimerInputs = () =>{

    if(SecondsINP != undefined){
        
        SecondsINP.remove();
        MilliSecondsINP.remove();
        MilliSecondsINP = undefined;
        SecondsINP = undefined;
    };

};