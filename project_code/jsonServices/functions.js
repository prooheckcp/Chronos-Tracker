//Variables\\

    const {ipcRenderer} = require('electron');
//__________\\

//To be saved data\\


    let TimersArray = [];
//_________________\\


const CreateAnewTimerJSON = (name, description, image, imagepath) =>{

    //Timer format
    let LocalObject = {
        timepassed: 0,
        name: name,
        desc: description,
        img: image
    }; 

    print(LocalObject.img)
    

    //Send to the array
    TimersArray.push(LocalObject);

    //Save on the backend
    //SaveTimersBackEnd();

};


const SaveTimersBackEnd = () =>{

     //Send info to back-end
    ipcRenderer.send('request-mainprocess-save', TimersArray);   

};