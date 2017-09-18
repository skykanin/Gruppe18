'use strict';

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const locals = {/* ...*/};
require('electron-pug')({pretty: true}, locals);
require('electron-reload')(__dirname);

let win

function createWindow () {
    win = new BrowserWindow({width: 1000, height: 1000, frame:true})
    exports.loadPage('frontPage.pug')
    win.webContents.openDevTools()
    win.on('closed', () => {
    win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
    app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
    createWindow()
    }
})




//call this to load a page!
exports.loadPage = (relPath) => {
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'html/', relPath),
        protocol: 'file:',
        slashes: true
    }))
}
