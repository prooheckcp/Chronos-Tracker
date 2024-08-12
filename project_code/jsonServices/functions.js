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
    HoldBackgroundsData = data;

    //Set the images
    for(let i = 0; i < data.routes.length; i++){
        AllBackgroundImages[i] = loadImage(data.routes[i]);
        if(i == data.Current)
            CurrentBackgroundImage = AllBackgroundImages[i];
    };

    if(data.Current == 3){
        //Set the image in case there is none
        CurrentBackgroundImage = BackgroundImage;
    }else if(data.Current == 4){
        CurrentBackgroundImage = BackgroundImage2;
    }else if(data.Current == 5){
        CurrentBackgroundImage = BackgroundImage3;
    };
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
        ipcRenderer.invoke( 'request-mainprocess-image', {path: imagepath, name: imagename, lo: LocalObject}).then((arg)=>{
            let LocalObject = arg.lo;

            LocalObject.path = arg.path;
    
            let LocalIndex = TimersArray.length;
    
            //Send to the array
            if(LocalObject.path != undefined){
                TimersImages[LocalIndex] = loadImage(LocalObject.path);
            }else{
                TimersImages[LocalIndex] = undefined;
            };
    
            TimersArray[LocalIndex] = LocalObject;
            
            //Send the timers data to the back-end
            SaveTimersBackEnd();
        })
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