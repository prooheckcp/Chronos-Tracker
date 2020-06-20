//The size properties of the header
let headerSettings = {

    width: 0,
    height: 0,
    x: 0,
    y: 0

};

const DrawTheMainHeader = () => {

    HeaderButtonPolish();

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

const HeaderButtonPolish = () =>{

    //Check if the tab is selected or not
    for(let i = 0; i  < UIelements.length; i++){

        let LocalButton = UIelements[i];

        if(i == TabID){
            LocalButton.textColor = {r: 255, g: 255, b: 255};
        }else{
            LocalButton.textColor = {r: 100, g: 100, b: 100};
        };

    };

};