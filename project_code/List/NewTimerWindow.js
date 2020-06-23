//Variables\\
    
    //WindowsStatus
    let NewTimerWindowStatus = true;

    //Window configurations
    let NewTimerWindowConfig = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };

    //Close Button
    let NewTimerWindowClose;

    //Insert an image
    let UploadImageButton = undefined;

    //Insert name
    let UploadNameInput = undefined;

    //Insert description
    let UploadDescriptionInput = undefined;

    //Image to be received
    let ImageToBeUploaded;

    //Name to be received
    let NameToBeUploaded;

    //Description to be received
    let DescriptionToBeUploaded;

    //Create timer
    let CreateTimerButton;

//----------\\

const LoadNewTimerButtons = () =>{

    //Close button
    NewTimerWindowClose = new button1(0, 0, 50, 50);
    NewTimerWindowClose.image = CircleButton;
    NewTimerWindowClose.color = {r: 145, g: 2, b: 0};
    NewTimerWindowClose.text = 'X';
    NewTimerWindowClose.fontSize = 40;
    NewTimerWindowClose.transparency = 200;
    NewTimerWindowClose.addHovering(()=>{
        NewTimerWindowClose.x -= 5;
        NewTimerWindowClose.y -= 5;
        NewTimerWindowClose.w += 10;
        NewTimerWindowClose.h += 10;
    });
    NewTimerWindowClose.eventClick1(()=>{
        NewTimerWindowStatus = false;
    });

    //Create timer
    CreateTimerButton = new button1(0, 0, 200, 50);
    CreateTimerButton.transparency = 200;
    CreateTimerButton.text = 'Create new timer';
    CreateTimerButton.fontSize = 22;
    CreateTimerButton.transparency = 150;
    CreateTimerButton.font = ArialBold;
    CreateTimerButton.color = {r: 23, g: 227,b: 26};
    CreateTimerButton.addHovering(()=>{
        fill(108, 232, 51);
    });
    CreateTimerButton.eventClick1(()=>{
        CreateAnewTimerJSON();
        NewTimerWindowStatus = false;
    });

};

const DrawNewTimerWindow = () =>{

    //Set the window properties
    SetNewTimerWindowConf();

    //Just for testing
    fill(0, 150);
    rect(NewTimerWindowConfig.x, NewTimerWindowConfig.y, NewTimerWindowConfig.w, NewTimerWindowConfig.h);

    //Close Button
    NewTimerWindowClose.w = 65;
    NewTimerWindowClose.h = 65;    
    NewTimerWindowClose.x = NewTimerWindowConfig.x + NewTimerWindowConfig.w - NewTimerWindowClose.w - 10;
    NewTimerWindowClose.y = NewTimerWindowConfig.y + 10;
    NewTimerWindowClose.draw();


    //Create all inputs
    if(UploadImageButton == undefined){

        //Create image input
        UploadImageButton = true; 
        UploadImageButton = createFileInput(file =>{

            if(file.type === 'image'){

                ImageToBeUploaded = createImg(file.data, '');   
                ImageToBeUploaded.hide();
            };

        });
        UploadImageButton.style('background-color', 'black');
        UploadImageButton.style('background', 'rgba(0, 0, 0, 0.4)');
        UploadImageButton.style('border', 'none');
        UploadImageButton.style('font-size', '30px');
        UploadImageButton.style('text-align', 'center');
        UploadImageButton.style('color', '#ffffff');
        UploadImageButton.style('font-weight', 'bold');
        UploadImageButton.size(600, 40);


        //Create Name input
        UploadNameInput = createInput('Insert Username');
        UploadNameInput.input(function(){
            NameToBeUploaded = this.value();
        });
        UploadNameInput.style('background-color', 'black');
        UploadNameInput.style('background', 'rgba(0, 0, 0, 0.4)');
        UploadNameInput.style('border', 'none');
        UploadNameInput.style('font-size', '30px');
        UploadNameInput.style('text-align', 'center');
        UploadNameInput.style('color', '#ffffff');
        UploadNameInput.style('font-weight', 'bold');

        //Create description input
        UploadDescriptionInput  = createInput('Insert Description');
        UploadDescriptionInput.input(function(){
            DescriptionToBeUploaded = this.value();
        });
        UploadDescriptionInput.style('background-color', 'black');
        UploadDescriptionInput.style('background', 'rgba(0, 0, 0, 0.4)');
        UploadDescriptionInput.style('border', 'none');
        UploadDescriptionInput.style('font-size', '30px');
        UploadDescriptionInput.style('text-align', 'center');
        UploadDescriptionInput.style('color', '#ffffff');
        UploadDescriptionInput.style('font-weight', 'bold');

    }else{

    //Texts\\

        textFont(ArialBold);    

        //Tittle
        textAlign(CENTER, TOP);
        textSize(60);
        text('New timer', NewTimerWindowConfig.x + NewTimerWindowConfig.w/2, NewTimerWindowConfig.y + 10);    

        textAlign(LEFT, TOP);
        textSize(40);

        //Name
        let LocalName = 'Name:';
        let LocalNameW = textWidth(LocalName);
        text(LocalName, NewTimerWindowConfig.x, NewTimerWindowConfig.y + 80);
        UploadNameInput.position(NewTimerWindowConfig.x + LocalNameW, NewTimerWindowConfig.y + 80);
        UploadNameInput.size(300, 40);

        //Description
        let LocalDesc = 'Description:';
        let LocalDescW = textWidth(LocalDesc);
        text(LocalDesc, NewTimerWindowConfig.x, NewTimerWindowConfig.y + 140);
        UploadDescriptionInput.position(NewTimerWindowConfig.x + LocalDescW, NewTimerWindowConfig.y + 140);
        UploadDescriptionInput.size(300, 40);

        //Upload image
        let LocalImage = 'Image:';
        let LocalImageW = textWidth(LocalImage);
        text(LocalImage, NewTimerWindowConfig.x, NewTimerWindowConfig.y + 200);
        UploadImageButton.position(NewTimerWindowConfig.x + LocalImageW, NewTimerWindowConfig.y + 205);
       
        if(ImageToBeUploaded){
            image(ImageToBeUploaded, NewTimerWindowConfig.x, NewTimerWindowConfig.y + 250, 200, 200);
        };

    //------\\

    //Create the timer button
    CreateTimerButton.w = 200;
    CreateTimerButton.h = 50;    
    CreateTimerButton.x = NewTimerWindowConfig.x + NewTimerWindowConfig.w - CreateTimerButton.w - 10;
    CreateTimerButton.y = NewTimerWindowConfig.y + NewTimerWindowConfig.h - CreateTimerButton.h - 10;
    CreateTimerButton.draw();


    };

   







};


const SetNewTimerWindowConf = () =>{


    //Size
    NewTimerWindowConfig.w = 850;
    NewTimerWindowConfig.h = 450;    
    
    //Position
    NewTimerWindowConfig.x = windowWidth/2 - NewTimerWindowConfig.w/2;
    NewTimerWindowConfig.y = headerSettings.height + ((windowHeight - headerSettings.height)/2 - NewTimerWindowConfig.h/2);


};

const NewTimerClicked = info =>{

    NewTimerWindowClose.click1(info);
    CreateTimerButton.click1(info);

};