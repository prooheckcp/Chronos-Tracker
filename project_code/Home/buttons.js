//Variables||

    let ChangeImageWindow = false;

    let ChangeImageWindowButton;

    let UploadNewBackgroundImage;
//_________||

const LoadHomeButton = () =>{

    //Open image choosing window||

        ChangeImageWindowButton = new button1(0, 0, 50, 50);
        ChangeImageWindowButton.image = CircleButton;
        ChangeImageWindowButton.transparency = 200;
        ChangeImageWindowButton.color = {r: 209, g: 214, b: 54};
        ChangeImageWindowButton.text = 'img';
        ChangeImageWindowButton.fontSize = 40;
        ChangeImageWindowButton.textColor = {r: 40, g: 40, b: 40};
        ChangeImageWindowButton.font = AntiCoronaFont;
        ChangeImageWindowButton.addHovering(()=>{
            ChangeImageWindowButton.w += 10;
            ChangeImageWindowButton.h += 10;
            ChangeImageWindowButton.x -= 5;
            ChangeImageWindowButton.y -= 5;      
                tint(144, 145, 0);   
            });
            ChangeImageWindowButton.eventClick1(()=>{

                //Change the window status
                ChangeImageWindow = !ChangeImageWindow;

            });       
    //__________________________||

};

const PressedHomeWindow = info =>{

    //Open/close the change background image window
    ChangeImageWindowButton.click1(info);

    //Clicked on default image 1
    if(CheckIfMouseInRect({
        x: ChangeImageWindowConf.x, 
        y: ChangeImageWindowConf.y, 
        w: ChangeImageWindowConf.w/3, 
        h: ChangeImageWindowConf.h/2.5
        }, 
        mouseX, mouseY) && ChangeImageWindow){

            TappingSound.play();
            CurrentBackgroundImage = BackgroundImage;
            HoldBackgroundsData.Current = 3;

    };

    //Clicked on default image 2
    if(CheckIfMouseInRect({
        x: ChangeImageWindowConf.x + ChangeImageWindowConf.w/3, 
        y: ChangeImageWindowConf.y, 
        w: ChangeImageWindowConf.w/3, 
        h: ChangeImageWindowConf.h/2.5
        }, 
        mouseX, mouseY) && ChangeImageWindow){

            TappingSound.play();
            CurrentBackgroundImage = BackgroundImage2;
            HoldBackgroundsData.Current = 4;

    };

    //Clicked on default image 3
    if(CheckIfMouseInRect({
        x: ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * 2, 
        y: ChangeImageWindowConf.y, 
        w: ChangeImageWindowConf.w/3, 
        h: ChangeImageWindowConf.h/2.5
        }, 
        mouseX, mouseY) && ChangeImageWindow){

            TappingSound.play();
            CurrentBackgroundImage = BackgroundImage3;
            HoldBackgroundsData.Current = 5;

    };


    //Clicked on image
    if(ChangeImageWindow){
        for(let i = 0; i < 3; i++){

            if(AllBackgroundImages[i] != undefined){


                
                if(CheckIfMouseInRect({
                    x: ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * i, 
                    y: ChangeImageWindowConf.y + ChangeImageWindowConf.h/2.5, 
                    w: ChangeImageWindowConf.w/3, 
                    h: ChangeImageWindowConf.h/2.5
                    }, 
                    mouseX, mouseY)){
                   
                        TappingSound.play();
                        CurrentBackgroundImage = AllBackgroundImages[i];
                        HoldBackgroundsData.Current = i;                      

                };

            };

        };
    };

};

const CreateTheHomeInptus = () =>{

    //Image input
    if(UploadNewBackgroundImage == undefined){

        UploadNewBackgroundImage = true; 
        UploadNewBackgroundImage = createFileInput(file =>{

            if(file.type === 'image'){

                CurrentBackgroundImage = createImg(file.data, '');   
                CurrentBackgroundImage.hide();


                ipcRenderer.send('save-background-folder', {path: file.file.path, name: file.file.name});
                ipcRenderer.on('save-background-folder-reply', (event, arg) =>{

                    //Add the picture info
                    if(HoldBackgroundsData.routes.length >= 3){

                        HoldBackgroundsData.Current = 0;

                        HoldBackgroundsData.routes[2] = HoldBackgroundsData.routes[1];
                        HoldBackgroundsData.routes[1] = HoldBackgroundsData.routes[0];
                        HoldBackgroundsData.routes[0] = arg;
                        
                        
                        AllBackgroundImages[2] = AllBackgroundImages[1];
                        AllBackgroundImages[1] = AllBackgroundImages[0];
                        AllBackgroundImages[0] = loadImage(file.file.path);
                    }else{
                        HoldBackgroundsData.Current = HoldBackgroundsData.routes.length;
                        AllBackgroundImages[HoldBackgroundsData.routes.length] = CurrentBackgroundImage;
                        HoldBackgroundsData.routes[HoldBackgroundsData.routes.length] = arg;
                        
                    };

                });

            };

        });
        UploadNewBackgroundImage.style('background-color', 'black');
        UploadNewBackgroundImage.style('background', 'rgba(0, 0, 0, 0.4)');
        UploadNewBackgroundImage.style('border', 'none');
        UploadNewBackgroundImage.style('font-size', '30px');
        UploadNewBackgroundImage.style('text-align', 'center');
        UploadNewBackgroundImage.style('color', '#ffffff');
        UploadNewBackgroundImage.style('font-weight', 'bold');
        UploadNewBackgroundImage.size(600, 40);
    };

};

const RemoveTheHomeInputs = () =>{

    //Image input
    if(UploadNewBackgroundImage != undefined){
        UploadNewBackgroundImage.remove();
        UploadNewBackgroundImage = undefined;
    };

};