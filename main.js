const {app, BrowserWindow, globalShortcut} = require('electron');

const path = require('path');
const url = require('url');

let win;

function createWindow(){

    //Create browser window
    win = new BrowserWindow({
        width: 1000, 
        height: 600, 
        icon: path.join(__dirname, "img", "icon.png"), 
        title: 'Chronos Tracker',
        minWidth: 1000,
        minHeight: 600,
        x: 0,
        y: 0
    });
  
    
	globalShortcut.register('CommandOrControl+R', function() {

        win.reload()
        
	});



    globalShortcut.register('CommandOrControl+D', () =>{
        win.removeMenu();
    });
        

    //Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));



    win.on('closed', ()=>{
        win = null;
    });
};

//Run create window function
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

