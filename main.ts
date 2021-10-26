const { app, BrowserWindow, ipcMain } = require("electron");
const { system } = require("@eggsnham07/ts-lib");

function createWindow() {
    const win = new BrowserWindow({
        width: 498,
        height: 640,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: "icon.png"
    });
    win.loadFile('pages/index.html');
    win.resizable = false;
    system.info("gt-mines has started");
}

app.whenReady().then(function() {
    createWindow() ;
    app.on('activate', function() {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function() {
    if (process.platform !== "darwin") app.quit();
});

ipcMain.on('quit-ping', function(event, arg) {
    if(arg == true) app.quit();
});
