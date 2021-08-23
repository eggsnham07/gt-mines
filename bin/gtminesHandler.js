#!/usr/env node
const {exec} = require("child_process")
const system = require("os")

var os = system.platform()
var nodepath
var gamepath

if (os == 'linux') nodepath = "/usr/bin/env node"
else if (os == 'win32') nodepath = "C:\\Program Files\\nodejs\\node.exe"
else {
    console.log("Unsupported OS")
    process.exit(1)
}

if(os === "linux")       gamepath = "/usr/lib/@eggsnham07/gt-mines"
else if(os === "win32")  gamepath = `C:\\Users\\${system.userInfo().username}\\AppData\\Roaming\\npm\\node_modules\\@eggsnham07\\gt-mines`

exec(`cd ${gamepath} && npm run start`, (error, stderr, stdout) => {
    if(error) {
        console.error(error)
        return
    }
    if(stderr) {
        console.error(stderr)
        return
    }

    console.log(stdout)
})