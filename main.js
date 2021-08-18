const { app, BrowserWindow } = require("electron")
const { h, w } = require("./config.json")

function createWindow() {
    const win = new BrowserWindow({
        width: w,
        height: h,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('pages/index.html')
    win.resizable = true
}

app.whenReady().then(function() {
    createWindow()
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length() === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()  
})