const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

function createWindow() {
    const win = new BrowserWindow({
        width: 497,
        height: 640,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        icon: __dirname + '/icon.png'
    })

    win.loadFile('pages/index.html')
    win.resizable = false
}

app.whenReady().then(function() {
    createWindow()
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length() === 0) createWindow()
    })

    ipcMain.on('event-ping', (_evt, arg) => {
        if(arg == true) {
            app.quit()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()  
})