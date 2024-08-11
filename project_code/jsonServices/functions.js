const { ipcRenderer } = require('electron');

let TimersArray = [];
let TimersImages = [];

let HoldBackgroundsData;
let AllBackgroundImages = [];

let CurrentBackgroundImage;

const processData = (data) => {
    if (!CurrentBackgroundImage) {
        CurrentBackgroundImage = BackgroundImage2
    }

    TimersArray = data;

    for(let i = 0; i < TimersArray.length; i++){
        if(typeof(TimersArray[i].path) == typeof('string')){
            TimersImages[i] = loadImage(TimersArray[i].path, undefined,err => {if(err) throw err});
        }else{
            TimersImages[i] = undefined;
        }
    }
}

const processBackgrounds = (data) => {
    console.log(data.length)
    TimersImages = data;
}

const LoadTimerData = () =>{
    ipcRenderer.invoke('request-load-background').then(processBackgrounds);
    ipcRenderer.invoke('request-load-data').then(processData);
};

const CreateAnewTimerJSON = (name, description, imagename, imagepath) =>{
    //Timer format
    let LocalObject = {
        timepassed: 0,
        name: name,
        desc: description,
        path: undefined
    }; 

    //Create the image on the directory
    if(imagename != undefined && imagename != null){
        ipcRenderer.send( 'request-mainprocess-image', {path: imagepath, name: imagename, lo: LocalObject});
    }else{
        //Send to the array
        TimersArray.push(LocalObject);   
        
        //Send the timers data to the back-end
        SaveTimersBackEnd();
    };

    //Clean variables
    ImageToBeUploadedName = undefined;
    NameToBeUploaded = undefined;
    DescriptionToBeUploaded = undefined;
    ImageToBeUploaded = undefined;
    ImageToBeUploadedPath = undefined;
};

const SaveTimersBackEnd = () =>{
    ipcRenderer.invoke('request-mainprocess-save', TimersArray);
    ipcRenderer.invoke('request-backgrounds-save', HoldBackgroundsData);
};