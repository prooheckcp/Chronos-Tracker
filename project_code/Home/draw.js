const DrawTheHome = () =>{

     //Time
    let CurrentTime = new Date();

    //Welcome message
    fill(255);
    textSize(90);
    textAlign(CENTER, TOP);
    textFont(ArialBold);
    text('Welcome back', windowWidth/2, 140);
    textSize(35);
    fill(255, 200);
    text('What are we doing today?', windowWidth/2, 230);
    textSize(100);
    fill(255, 100);

    //Get the variables||

        let LocalHours = CurrentTime.getHours();
        let LocalMinutes = CurrentTime.getMinutes();
        let LocalSeconds = CurrentTime.getSeconds();

        if(LocalSeconds < 10){
            LocalSeconds = '0' + LocalSeconds;
        };

        if(LocalMinutes < 10){
            LocalMinutes = '0' + LocalMinutes;
        };

        if(LocalHours < 10){
            LocalHours = '0' + LocalHours;
        };
    //_________________||

    //Get the days variables||

        let LocalDay = CurrentTime.getDate();
        let LocalMonth = CurrentTime.getMonth() + 1;
        let LocalYear = CurrentTime.getFullYear();

        if(LocalDay < 10){
            LocalDay = '0' + LocalDay;
        };

        if(LocalMonth < 10){
            LocalMonth = '0' + LocalMonth;
        };

        let TimeOfDay = 'PM';

        if(LocalHours < 12){
            TimeOfDay = 'AM';
        };

    //______________________||

    text('' + LocalDay + '/' + LocalMonth + '/' + LocalYear, windowWidth/2, 400);
    textSize(60);
    text('' + LocalHours + ':' + LocalMinutes + ':' + LocalSeconds + ' ' + TimeOfDay, windowWidth/2, 340);

    //Draw the buttons||

        //Open/close image window
        ChangeImageWindowButton.w = 75;
        ChangeImageWindowButton.h = 75;
        ChangeImageWindowButton.x = windowWidth - ChangeImageWindowButton.w - 10;
        ChangeImageWindowButton.y = windowHeight - ChangeImageWindowButton.h - 10; 

        ChangeImageWindowButton.draw();

    //________________||

    //If the window is open then display it
    if(ChangeImageWindow){
        ChangeImageWindowDraw();
        CreateTheHomeInptus();
    }else{
        RemoveTheHomeInputs();
    };

};

//Change Image Window settings||

    let ChangeImageWindowConf = {
        x: 0,
        y: 0,
        w: 850,
        h: 450
    };
//____________________________||

const ChangeImageWindowDraw = () =>{

    //Draw the background||

        //Set the position
        ChangeImageWindowConf.x = windowWidth/2 - ChangeImageWindowConf.w/2;;
        ChangeImageWindowConf.y = (windowHeight - headerSettings.height)/2 - ChangeImageWindowConf.h/2 + headerSettings.height;

        //Draw the rectangle
        fill(0, 100); 
        rect(ChangeImageWindowConf.x, ChangeImageWindowConf.y, ChangeImageWindowConf.w, ChangeImageWindowConf.h);    
    //___________________||

    //Draw the images that are allowed||

        //Default Image 1

        image(BackgroundImage, ChangeImageWindowConf.x, ChangeImageWindowConf.y, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

        if(CheckIfMouseInRect({
            x: ChangeImageWindowConf.x, 
            y: ChangeImageWindowConf.y, 
            w: ChangeImageWindowConf.w/3, 
            h: ChangeImageWindowConf.h/2.5
            }, 
            mouseX, mouseY)){

                fill(247, 255, 18, 50);
                rect(ChangeImageWindowConf.x, ChangeImageWindowConf.y, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

        };



        //Default Image 2

        image(BackgroundImage2, ChangeImageWindowConf.x + ChangeImageWindowConf.w/3, ChangeImageWindowConf.y, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);        
        
        if(CheckIfMouseInRect({
            x: ChangeImageWindowConf.x + ChangeImageWindowConf.w/3, 
            y: ChangeImageWindowConf.y, 
            w: ChangeImageWindowConf.w/3, 
            h: ChangeImageWindowConf.h/2.5
            }, 
            mouseX, mouseY)){

                fill(247, 255, 18, 50);
                rect(ChangeImageWindowConf.x + ChangeImageWindowConf.w/3, ChangeImageWindowConf.y, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

        };
        


        //Default Image 3

        image(BackgroundImage3, ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * 2, ChangeImageWindowConf.y, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

        if(CheckIfMouseInRect({
            x: ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * 2, 
            y: ChangeImageWindowConf.y, 
            w: ChangeImageWindowConf.w/3, 
            h: ChangeImageWindowConf.h/2.5
            }, 
            mouseX, mouseY)){

                fill(247, 255, 18, 75);
                rect(ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * 2, ChangeImageWindowConf.y, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

        };
        

        //Draw the custom images
        for(let i = 0; i < 3; i++){

            if(AllBackgroundImages[i] != undefined){

                //In case the image exists
                image(AllBackgroundImages[i], ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * i, ChangeImageWindowConf.y + ChangeImageWindowConf.h/2.5, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

                fill(247, 255, 18, 75);
                
                if(CheckIfMouseInRect({
                    x: ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * i, 
                    y: ChangeImageWindowConf.y + ChangeImageWindowConf.h/2.5, 
                    w: ChangeImageWindowConf.w/3, 
                    h: ChangeImageWindowConf.h/2.5
                    }, 
                    mouseX, mouseY)){
                    rect(ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * i, ChangeImageWindowConf.y + ChangeImageWindowConf.h/2.5, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);
                };

            }else{

                //In case there is no image
                fill(112, 112, 112);
                rect(ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * i, ChangeImageWindowConf.y + ChangeImageWindowConf.h/2.5, ChangeImageWindowConf.w/3, ChangeImageWindowConf.h/2.5);

                //Draw the text message
                fill(250);
                textSize(50);
                textAlign(CENTER, CENTER);
                text('No image', ChangeImageWindowConf.x + ChangeImageWindowConf.w/3 * i + ChangeImageWindowConf.w/6, ChangeImageWindowConf.y + ChangeImageWindowConf.h/2.5 + ChangeImageWindowConf.h/5);

            };

        };

    //________________________________||

    //Image input box||

        if(UploadNewBackgroundImage != undefined){
            UploadNewBackgroundImage.position(ChangeImageWindowConf.x, ChangeImageWindowConf.y + ChangeImageWindowConf.h - 40);
            UploadNewBackgroundImage.size(400, 40);
        };
    //_______________||

};