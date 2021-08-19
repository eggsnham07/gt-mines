const { ipcRenderer } = require("electron")
function quit()

if(window && window.process && window.process.type) {
    quit = function()  {
        ipcRenderer.send('event-ping', true)
    }
} else {
    quit = function() {
        window.close()
    }
}