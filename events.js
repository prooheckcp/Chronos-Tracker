const { ipcMain, app } = require('electron');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const userDataPath = app.getPath('userData');
const timersPath = path.join(userDataPath, 'Timers.json');
const imagesPath = path.join(userDataPath, "Images")
const backgroundsJson = path.join(userDataPath, "Background.json")

module.exports = 
    () =>{
        if (!fs.existsSync(timersPath)) {
            fs.writeFileSync(timersPath, JSON.stringify({}));
        }

        if (!fs.existsSync(imagesPath)){
            fs.mkdirSync(imagesPath, { recursive: true });
        }

        if (!fs.existsSync(backgroundsJson)){
            fs.writeFileSync(backgroundsJson, JSON.stringify({}))
        }

        //Load Timer Data
        ipcMain.on('request-load-data', (event, arg) =>{
            let LocalData = fs.readFileSync(timersPath);
            event.reply('receive-load-request', JSON.parse(LocalData));
        });

        //Save Timer Data
        ipcMain.on('request-mainprocess-save', (event, arg) => {
            fs.writeFileSync(timersPath, JSON.stringify(arg));
            event.reply('save-reply', 'Data has been saved');
        });


        //Create image path event
        ipcMain.on('request-mainprocess-image', (event, arg) => {
            fse.copySync(arg.path, imagesPath);
            event.reply('image-reply', {path: path.join(imagesPath, arg.name), lo: arg.lo});
        });

        //Load the backgrounds
        ipcMain.on('request-load-background', (event, _arg) =>{
            console.log(backgroundsJson)
            event.reply('receive-load-background', JSON.parse(fs.readFileSync(backgroundsJson)));
        });

        //Save the backgrounds
        ipcMain.on('request-backgrounds-save', (_event, arg) =>{
            fs.writeFileSync(backgroundsJson, JSON.stringify(arg));
        });

        //Save image on folder
        ipcMain.on('save-background-folder', (event, arg) =>{
            fse.copySync(arg.path, path.join(imagesPath, arg.name));
            event.reply('save-background-folder-reply', path.join(imagesPath, arg.name));
        });

    };
;