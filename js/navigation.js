let close = document.getElementById("close"),
    maximize = document.getElementById("maximize"),
    minimize = document.getElementById("minimize"),
    nav = document.getElementById("nav");

    // var drag = require('electron-drag');
    
    
   // var clear = drag('#nav');
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