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


};