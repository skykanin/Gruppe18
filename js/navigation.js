const remote = require('electron').remote
const main = remote.require('./main.js')

let home = document.getElementById("home"),
    manager = document.getElementById("manager"),
    konserter = document.getElementById("konserter"),
    close = document.getElementById("close"),
    maximize = document.getElementById("maximize"),
    minimize = document.getElementById("minimize"),
    nav = document.getElementById("nav");
close.onclick = () => {
    let window = remote.getCurrentWindow();
    window.close();
}
minimize.onclick = () => {
    let window = remote.getCurrentWindow();
    window.minimize();
}
maximize.onclick = () => {
    let window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
}

console.log(manager)

home.onclick = () => {
    main.loadPage("index.pug")
}

manager.onclick = () => {
    main.loadPage("manager.pug")
}

konserter.onclick = () => {
    main.loadPage("konserter.pug")
}

