//To be saved data\\

    let TimersArray = [{name: 'hi'}];
//_________________\\


const CreateAnewTimerJSON = (name, description, image) =>{

    //Timer format
    let LocalObject = {
        timepassed: 0,
        name: name,
        desc: description,
        img: image

    }; 


    //Send to the array
    TimersArray.push(LocalObject);


    let xixi = loadJSON('Databases/timers.json', result =>{
        print(result);
    });
    print(xixi)


    //let LocalTest= new p5.File('./../../Databases/timers.json');
    //print(LocalTest);

};


function GettingArrayInfo(){
    console.log(TimersArray);
    return TimersArray;
};

module.exports = {

    save: GettingArrayInfo,

    load: data =>{
        console.log(data);
    }

};