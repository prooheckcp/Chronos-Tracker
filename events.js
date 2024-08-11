const { ipcMain, app } = require('electron');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

// Ensure this is executed after Electron's `app` is ready
const userDataPath = app.getPath('userData');
const timersPath = path.join(userDataPath, 'Timers.json');
const imagesPath = path.join(userDataPath, 'Images');
const backgroundsJson = path.join(userDataPath, 'Background.json');

module.exports = () => {
    // Ensure the necessary files and directories exist
    try {
        if (!fs.existsSync(timersPath)) {
            fs.writeFileSync(timersPath, JSON.stringify({}));
        }

        if (!fs.existsSync(imagesPath)) {
            fs.mkdirSync(imagesPath, { recursive: true });
        }

        if (!fs.existsSync(backgroundsJson)) {
            fs.writeFileSync(backgroundsJson, JSON.stringify({}));
        }
    } catch (error) {
        console.error('Error initializing files/directories:', error);
    }

    // Load Timer Data
    ipcMain.handle('request-load-data', async () => {
        try {
            const localData = await fs.promises.readFile(timersPath);
            return JSON.parse(localData);
        } catch (error) {
            console.error('Error reading timer data:', error);
            return {};
        }
    });

    // Save Timer Data
    ipcMain.handle('request-mainprocess-save', async (event, arg) => {
        try {
            await fs.promises.writeFile(timersPath, JSON.stringify(arg));
            return 'Data has been saved';
        } catch (error) {
            console.error('Error saving timer data:', error);
            return 'Failed to save data';
        }
    });

    // Create image path event
    ipcMain.handle('request-mainprocess-image', async (event, arg) => {
        try {
            await fse.copy(arg.path, path.join(imagesPath, arg.name));
            return { path: path.join(imagesPath, arg.name), lo: arg.lo };
        } catch (error) {
            console.error('Error copying image:', error);
            return { path: '', lo: arg.lo };  // Return a default or error path
        }
    });

    // Load the backgrounds
    ipcMain.handle('request-load-background', async () => {
        try {
            const data = await fs.promises.readFile(backgroundsJson);
            let jsonData = JSON.parse(data);
            console.log("-----", data, jsonData)
            if (!jsonData.Current){
                jsonData.Current = 3;
            }

            if (!jsonData.routes){
                jsonData.routes = [];
            }

            return jsonData
        } catch (error) {
            console.error('Error reading backgrounds data:', error);
            return {};
        }
    });

    // Save the backgrounds
    ipcMain.handle('request-backgrounds-save', async (_event, arg) => {
        if (!arg){
            return;
        }

        try {
            await fs.promises.writeFile(backgroundsJson, JSON.stringify(arg));
            return 'Backgrounds saved';
        } catch (error) {
            console.error('Error saving backgrounds data:', error);
            return 'Failed to save backgrounds';
        }
    });

    console.log(imagesPath);

    // Save image in folder
    ipcMain.handle('save-background-folder', async (_event, arg) => {
        try {
            await fse.copy(arg.path, path.join(imagesPath, arg.name));
            return path.join(imagesPath, arg.name);
        } catch (error) {
            console.error('Error saving background folder:', error);
            return '';  // Return an empty or error path
        }
    });
};
