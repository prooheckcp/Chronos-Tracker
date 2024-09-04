//Modules and libraries\\
    const {app, BrowserWindow, globalShortcut, ipcMain, ipcRenderer} = require('electron');
    const path = require('path');
    const url = require('url');
    const http = require('http');
    const fs = require('fs');
    const jsonInfo = require('./project_code/jsonServices/functions');
    const { stringify } = require('querystring');
    require('events').EventEmitter.defaultMaxListeners = 20;
//______________________\\


//Set the events between front-end and back-end
require('./events')();

//Set the window configuration
const createWindow = require('./windowconf');

//When the .exe file is called crate the window
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    };
});