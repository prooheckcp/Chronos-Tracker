class button1 {

    //Variables
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = "";
        this.fontSize = 16;
        this.hovered;
        this.button1;
        this.button2;
    };

    draw(){
        fill(200);

        if(typeof(this.hovered) == typeof(()=>{}) && CheckIfMouseInRect(this, mouseX, mouseY)){
            this.hovered();
        };

        rect(this.x, this.y, this.w, this.h);

        textSize(this.fontSize);
        textAlign(CENTER, CENTER);
        BetterText(this.text, this.x + this.w/2, this.y+ this.h/2);
    };

    addHovering(func){

        if(typeof(func) == typeof(() =>{})){
            this.hovered = func;
        }else{
            this.hovered = undefined;
        };

    };

    eventClick1(func){

        if(typeof(func) == typeof(()=>{})){
            this.click1 = func;
        }else{
            this.click1 = undefined;
        };

    };

    eventClick2(func){

        if(typeof(func) == typeof(()=>{})){
            this.click2 = func;
        }else{
            this.click2 = undefined;
        };

    };

    click1(buttonused){

        if(typeof(this.button1) != typeof(()=>{})){
            return;
        };

        if(CheckIfMouseInRect(this, mouseX, mouseY) && buttonused == 1){
            this.button1();
        };
    };

    click2(buttonused){

        if(typeof(this.button2) != typeof(()=>{})){
            return;
        };

        if(CheckIfMouseInRect(this, mouseX, mouseY) && buttonused == 2){
            this.button2();
        };
    };

};