const { ipcMain } = require('electron');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { app } = require('electron');

const userDataPath = app.getPath('userData');
const databasesDir = path.join(userDataPath, 'Databases');
const backgroundsDir = path.join(databasesDir, 'backgrounds');
const timersPath = path.join(databasesDir, 'timers.json');
const filePath = path.join(databasesDir, 'background.json');

// Ensure directories and files exist
if (!fs.existsSync(databasesDir)) {
    fs.mkdirSync(databasesDir, { recursive: true });
}

if (!fs.existsSync(backgroundsDir)) {
    fs.mkdirSync(backgroundsDir, { recursive: true });
}

if (!fs.existsSync(timersPath)) {
    fs.writeFileSync(timersPath, JSON.stringify({}), 'utf-8'); // Create with default content
}

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}), 'utf-8'); // Create with default content
}

module.exports = () => {

    // Save event
    ipcMain.on('request-mainprocess-save', (event, arg) => {
        try {
            fs.writeFileSync(timersPath, JSON.stringify(arg), 'utf-8');
            event.reply('save-reply', 'Data has been saved');
        } catch (err) {
            console.error('Error saving timers:', err);
            event.reply('save-reply', 'Error saving data');
        }
    });

    // Create image path event
    ipcMain.on('request-mainprocess-image', (event, arg) => {
        try {
            fse.copySync(arg.path, path.join(databasesDir, 'images', arg.name));
            event.reply('image-reply', { path: path.join(databasesDir, 'images', arg.name), lo: arg.lo });
        } catch (err) {
            console.error('Error copying image:', err);
            event.reply('image-reply', 'Error copying image');
        }
    });

    // Load the data
    ipcMain.on('request-load-data', (event, arg) => {
        try {
            if (fs.statSync(timersPath).isFile()) {
                let LocalData = fs.readFileSync(timersPath);
                console.log(LocalData)
                event.reply('receive-load-request', JSON.parse(LocalData));
            } else {
                throw new Error('Expected a file but found a directory.');
            }
        } catch (err) {
            console.error('Error loading data:', err);
            event.reply('receive-load-request', 'Error loading data');
        }
    });

    // Load the backgrounds
    ipcMain.on('request-load-background', (event, arg) => {
        try {
            if (fs.statSync(filePath).isFile()) {
                let LocalData = fs.readFileSync(filePath, 'utf-8');
                event.reply('receive-load-background', JSON.parse(LocalData));
            } else {
                throw new Error('Expected a file but found a directory.');
            }
        } catch (err) {
            console.error('Error loading background:', err);
            event.reply('receive-load-background', 'Error loading background');
        }
    });

    // Save the backgrounds
    ipcMain.on('request-backgrounds-save', (event, arg) => {
        try {
            fs.writeFileSync(filePath, JSON.stringify(arg), 'utf-8');
        } catch (err) {
            console.error('Error saving background:', err);
            event.reply('save-background', 'Error saving background');
        }
    });

    // Save image on folder
    ipcMain.on('save-background-folder', (event, arg) => {
        try {
            fse.copySync(arg.path, path.join(backgroundsDir, arg.name));
            event.reply('save-background-folder-reply', path.join(backgroundsDir, arg.name));
        } catch (err) {
            console.error('Error saving background folder:', err);
            event.reply('save-background-folder-reply', 'Error saving background folder');
        }
    });
};
