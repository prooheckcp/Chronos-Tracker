const { ipcMain } = require('electron');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

module.exports = 
    () =>{

        //Save event
        ipcMain.on('request-mainprocess-save', (event, arg) => {

            fs.writeFileSync(path.join(__dirname, 'Databases', 'timers.json'), JSON.stringify(arg));

            event.reply('save-reply', 'Data has been saved');
            
        });

        //Create image path event
        ipcMain.on('request-mainprocess-image', (event, arg) => {

            fse.copySync(arg.path, path.join(__dirname, 'Databases', 'images', arg.name));

            event.reply('image-reply', path.join(__dirname, 'Databases', 'images', arg.name));

        });


        //Load the data
        ipcMain.on('request-load-data', (event, arg) =>{


            let LocalData = fs.readFileSync(path.join(__dirname, 'Databases', 'timers.json'));

            event.reply('receive-load-request', JSON.parse(LocalData));

        });

    };
;