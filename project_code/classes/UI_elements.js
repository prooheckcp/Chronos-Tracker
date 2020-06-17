class button1 {

    //Variables
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = "";
        this.fontSize = 16;
        this.transparency = 0;
        this.color = {r: 255, g: 255, b: 255};
        this.hovered;
        this.button1;
        this.button2;
        this.stroke = false;
        this.textColor = {r: 255, g: 255, b: 255};
        this.font;
        this.image;
    };

    draw(){
        fill(this.color.r, this.color.g, this.color.b, this.transparency);
        tint(this.color.r, this.color.g, this.color.b, this.transparency);

        if(typeof(this.hovered) == typeof(()=>{}) && CheckIfMouseInRect(this, mouseX, mouseY)){
            this.hovered();
        };

        if(this.image == undefined){
            rect(this.x, this.y, this.w, this.h);
        }else{
            image(this.image, this.x, this.y, this.w, this.h);
        };

        noTint();

        if(this.font != undefined){
            textFont(this.font);
        };

        textSize(this.fontSize);
        textAlign(CENTER, CENTER);

        if(this.stroke){
            BetterText(this.text, this.x + this.w/2, this.y+ this.h/2);
        }else{
            fill(this.textColor.r, this.textColor.g, this.textColor.b);
            text(this.text, this.x + this.w/2, this.y+ this.h/2);
        };
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
            this.button1 = func;
        }else{
            this.button1 = undefined;
        };

    };

    eventClick2(func){

        if(typeof(func) == typeof(()=>{})){
            this.button2 = func;
        }else{
            this.button2 = undefined;
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