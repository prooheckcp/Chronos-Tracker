const { ipcMain } = require('electron');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const userDataPath = app.getPath('userData');

module.exports = 
    () =>{

        //Save event
        ipcMain.on('request-mainprocess-save', (event, arg) => {

            fs.writeFileSync(path.join(userDataPath, 'Databases', 'timers.json'), JSON.stringify(arg));

            event.reply('save-reply', 'Data has been saved');
            
        });

        //Create image path event
        ipcMain.on('request-mainprocess-image', (event, arg) => {

            fse.copySync(arg.path, path.join(userDataPath, 'Databases', 'images', arg.name));

            event.reply('image-reply', {path: path.join(userDataPath, 'Databases', 'images', arg.name), lo: arg.lo});

        });


        //Load the data
        ipcMain.on('request-load-data', (event, arg) =>{


            let LocalData = fs.readFileSync(path.join(userDataPath, 'Databases', 'timers.json'));

            event.reply('receive-load-request', JSON.parse(LocalData));

        });


        //Load the backgrounds
        ipcMain.on('request-load-background', (event, arg) =>{

            let LocalData = fs.readFileSync(path.join(userDataPath, 'Databases', 'background.json'));

            event.reply('receive-load-background', JSON.parse(LocalData));

        });

        //Save the backgrounds
        ipcMain.on('request-backgrounds-save', (event, arg) =>{

            fs.writeFileSync(path.join(userDataPath, 'Databases', 'background.json'), JSON.stringify(arg));

        });

        //Save image on folder
        ipcMain.on('save-background-folder', (event, arg) =>{

            fse.copySync(arg.path, path.join(userDataPath, 'Databases', 'backgrounds', arg.name));

            event.reply('save-background-folder-reply', path.join(userDataPath, 'Databases', 'backgrounds', arg.name));

        });

    };
;