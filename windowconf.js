//Variables\\

    const {app, BrowserWindow, globalShortcut, ipcMain, ipcRenderer} = require('electron');
    const path = require('path');
    const url = require('url');
    //The window
    let win;
//__________\\

module.exports = ()=>{

    //Create browser window
    win = new BrowserWindow({
        width: 1000, 
        height: 600, 
        icon: path.join(__dirname, "img", "icon.png"), 
        title: 'Chronos Tracker',
        minWidth: 1000,
        minHeight: 600,
        x: 0,
        y: 0,
        webPreferences: {nodeIntegration: true}
    });
    
    //Restart the front end
	globalShortcut.register('CommandOrControl+R', function() {
        win.reload()
	});

    //Remove the menu at the top of the window 
    globalShortcut.register('CommandOrControl+D', () =>{
        win.removeMenu();
    });
        

    //Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Reset the variable once the window closes
    win.on('closed', ()=>{
        win = null;
    });

};