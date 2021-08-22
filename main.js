const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

function createWindow() {
    const win = new BrowserWindow({
        width: 498,
        height: 640,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: path.join(__dirname + "icon.png")
    })
    win.loadFile('pages/index.html')
    win.resizable = false
}

app.whenReady().then(() => { 
    createWindow() 
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== "darwin") app.quit()
})

ipcMain.on('quit-ping', (event, arg) => {
    if(arg == true) app.quit()
})