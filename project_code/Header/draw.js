//The size properties of the header
let headerSettings = {

    width: 0,
    height: 0,
    x: 0,
    y: 0

};

const DrawTheMainHeader = () => {

    //Set the header settings
    SetTheHeaderSettings();

    //The header color
    fill(0, 175);
    noStroke();

    //HeaderBackground
    rect(headerSettings.x, headerSettings.y, headerSettings.width, headerSettings.height);
};


const SetTheHeaderSettings = () =>{

    headerSettings.x = 0;
    headerSettings.y = 0;
    headerSettings.width = windowWidth;
    headerSettings.height = 65;

};