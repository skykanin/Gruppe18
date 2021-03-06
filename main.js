'use strict';

const mysql = require('mysql')
const {app, BrowserWindow, protocol} = require('electron')
const path = require('path')
const url = require('url')
exports.locals = {loggedIn: ''};
require('electron-pug')({pretty: true}, exports.locals);
require('electron-reload')(__dirname);
let currentPage = ''

let win

exports.connection = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql.stud.ntnu.no',
    user: 'andrris_gruppe18',
    password: 'cdji2005',
    database: 'andrris_gruppe18',
})

function createWindow () {
    let platform = process.platform
    if(platform == 'darwin'){
        win = new BrowserWindow({width: 1000, height: 800, titleBarStyle: 'hiddenInset'})
    } else {
        win = new BrowserWindow({width: 1000, height: 800, frame:false})
    }
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
        pathname: path.join(__dirname, '/html/', relPath),
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

exports.SQLquery = (query, resolve) => {
    exports.connection.query(query, (err, rows, fields) => {
        if (err) {
            return console.log(err.stack)
        }
        resolve(rows, fields)
    })
}

var dataObjects = require(path.resolve('js/objects/DataObjects'))
dataObjects.reloadConcerts()
dataObjects.reloadBands()
dataObjects.reloadFestivals()
dataObjects.reloadUsers()
exports.locals.concerts = dataObjects.concerts
exports.locals.festivals = dataObjects.festivals
exports.locals.users = dataObjects.users
exports.locals.bands = dataObjects.bands