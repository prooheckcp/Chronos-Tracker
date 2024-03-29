//Variables\\

    const {ipcRenderer, ipcMain} = require('electron');
//__________\\

//To be saved data\\

    //Timers data
    let TimersArray = [];
    let TimersImages = [];

    //BackgroundImage
    let HoldBackgroundsData;
    let AllBackgroundImages = [];

    let CurrentBackgroundImage;

//_________________\\


const LoadTimerData = () =>{

    //Load Background Images||

        //Ask for the backgrounds
        ipcRenderer.send('request-load-background');

    


    //Asks for the data
    ipcRenderer.send('request-load-data');


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

    //Send info to back-end
    ipcRenderer.send('request-mainprocess-save', TimersArray);
    

    //Send the info to save the backgrounds data on the backend 
    ipcRenderer.send('request-backgrounds-save', HoldBackgroundsData);

};


const CreateEventsJSON = () =>{

    //Get the reply
    ipcRenderer.on('save-reply', (event, arg) =>{
            
    }); 


    ipcRenderer.on('image-reply', (event, arg) =>{

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

    });

    //Receive the backgrounds
    ipcRenderer.on('receive-load-background', (event, arg) =>{

        //Set the data on the client side
        HoldBackgroundsData = arg;

        //Set the images
        for(let i = 0; i < arg.routes.length; i++){

            AllBackgroundImages[i] = loadImage(arg.routes[i]);

            if(i == arg.Current){

                CurrentBackgroundImage = AllBackgroundImages[i];

            };

        };


        if(arg.Current == 3){

            //Set the image in case there is none
            CurrentBackgroundImage = BackgroundImage;

        }else if(arg.Current == 4){

            CurrentBackgroundImage = BackgroundImage2;

        }else if(arg.Current == 5){

            CurrentBackgroundImage = BackgroundImage3;

        };

    });






    //______________________||

    //Receive the data
    ipcRenderer.on('receive-load-request', (event, arg) =>{


        //Set the data to the argument
        TimersArray = arg;

        //Set the timers images
        for(let i = 0; i < TimersArray.length; i++){

            if(typeof(TimersArray[i].path) == typeof('string')){

                TimersImages[i] = loadImage( TimersArray[i].path, undefined,err => {if(err) throw err});

            }else{

                TimersImages[i] = undefined;

            };

        };

    });

};

