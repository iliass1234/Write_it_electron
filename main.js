const { app, BrowserWindow } = require('electron')
const path = require('node:path');
const globalState = {
    souce: 'hello souce'
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    win.loadFile('index.html');
}

app.whenReady().then(()=>{
    createWindow();
});