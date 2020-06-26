const { ipcMain } = require('electron');

module.exports = 
    () =>{

        //Save event
        ipcMain.on('request-mainprocess-save', (event, arg) => {

            console.log(arg);
            
        });

    };
;