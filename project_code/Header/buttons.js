//Variables\\

    let HomeButton;

//__________\\

const CreateHeaderButtons = () =>{

    //Home button\\

        HomeButton = NewButton(0, 0, 200, 75);
        HomeButton.text = 'Home';
        HomeButton.fontSize = 40;
        HomeButton.addHovering(()=>{
        fill(100);
        });    
    //------------\\


};