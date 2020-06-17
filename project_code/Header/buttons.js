//Variables\\

    let HomeButton;
    let TimerButton;
    let ListButton;
    let AboutButton;
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
        HomeButton.font = AntiCoronaFont;
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
        TimerButton.font = AntiCoronaFont;
    //------\\
    
    //Timers list\\

        ListButton = NewButton(400, 0, 200, 65);
        ListButton.text = 'List';
        ListButton.fontSize = 40;
        ListButton.addHovering(()=>{
            fill(100, 100);
        });    
        ListButton.eventClick1(()=>{
            TabID = 2;
        }); 
        ListButton.font = AntiCoronaFont;
    //------------\\
    
    //About\\

    AboutButton = NewButton(600, 0, 200, 65);
    AboutButton.text = 'About';
    AboutButton.fontSize = 40;
    AboutButton.addHovering(()=>{
            fill(100, 100);
        });    
        AboutButton.eventClick1(()=>{
            TabID = 3;
        }); 
    AboutButton.font = AntiCoronaFont;
    //------\\


};