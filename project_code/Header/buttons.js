//Variables\\

    let HomeButton;
    let TimerButton;
//__________\\

const CreateHeaderButtons = () =>{

    //Home button\\

        HomeButton = NewButton(0, 0, 200, 65);
        HomeButton.text = 'Home';
        HomeButton.fontSize = 40;
        HomeButton.addHovering(()=>{
            fill(100, 100);
        });    
        HomeButton.eventClick1(()=>{
            TabID = 0;
        });
    //------------\\
    
    //Timer\\

        TimerButton = NewButton(200, 0, 200, 65);
        TimerButton.text = 'Timer';
        TimerButton.fontSize = 40;
        TimerButton.addHovering(()=>{
            fill(100, 100);
        });    
        TimerButton.eventClick1(()=>{
            TabID = 1;
        });      
    //------\\


};