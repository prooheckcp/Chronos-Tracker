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
    text('' + CurrentTime.getDate() + '/' + CurrentTime.getMonth() + '/' + CurrentTime.getFullYear(), windowWidth/2, 400);
    textSize(60);
    text('' + CurrentTime.getHours() + ':' + CurrentTime.getMinutes() + ':' + CurrentTime.getSeconds(), windowWidth/2, 340);


};