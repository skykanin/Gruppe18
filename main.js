'use strict';

const {app, BrowserWindow, protocol} = require('electron')
const path = require('path')
const url = require('url')
const locals = {username: 'Jimmy'};
require('electron-pug')({pretty: true}, locals);
require('electron-reload')(__dirname);
let currentPage = ''

let win

function createWindow () {
    win = new BrowserWindow({width: 1000, height: 800, frame:false})
    exports.loadPage('loginPage.pug')
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
    currentPage = relPath;
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'html/', relPath),
        protocol: 'file:',
        slashes: true
    }))
}

exports.changeUsername = (username) => {
    locals.username = username
};

exports.reloadPage = () => {
    exports.loadPage(currentPage)
};
