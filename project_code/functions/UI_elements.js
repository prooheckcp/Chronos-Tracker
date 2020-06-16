const CheckIfMouseInRect = (rectangle, mx, my) =>{

    return (mx >= rectangle.x && mx <= rectangle.x + rectangle.w && my >= rectangle.y && my <= rectangle.y + rectangle.h);

};

const NewButton = (ix, iy, iw, ih) => {

    let defeaultStats = {
        x: 0,
        y: 0,
        w: 100,
        h: 50
    };

    //The x size
    if(typeof(ix) == typeof(1)){defeaultStats.x = ix;};
    //The y size
    if(typeof(iy) == typeof(1)){defeaultStats.y = iy;};
    //The w size
    if(typeof(iw) == typeof(1)){defeaultStats.w = iw;};
    //The h size
    if(typeof(ih) == typeof(1)){defeaultStats.h = ih;};

    let MakeTheButton = new button1(defeaultStats.x, defeaultStats.y, defeaultStats.w, defeaultStats.h);
    
    //Send the element to the screen
    let LocalArrayPos = UIelements.length;
    UIelements[LocalArrayPos] = MakeTheButton;

    return UIelements[LocalArrayPos];

};

const BetterText = (string, x, y, color) => {

    fill(0);
    text(string, x + 2, y);
    text(string, x + 2, y + 2);
    text(string, x + 2, y - 2);
    text(string, x - 2, y);
    text(string, x - 2, y + 2);
    text(string, x - 2, y - 2);
    text(string, x, y + 2);
    text(string, x, y - 2);

    if(typeof(color) == typeof({})){
        fill(color.r, color.g, color.b)
    }else{
       fill(255); 
    }
    
    text(string, x, y);

    fill(255);
};