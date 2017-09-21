let home = document.getElementById("home"),
    manager = document.getElementById("man"),
    bookchief = document.getElementById("bookchief"),
    bookresp = document.getElementById("bookresp"),
    arranger = document.getElementById("arr"),
    technician = document.getElementById("tech"),
    close = document.getElementById("close"),
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


home.onclick = () => {
    main.loadPage("index.pug")
}

manager.onclick = () => {
    main.loadPage("man-main.pug")
}

arranger.onclick = () => {
    main.loadPage("arr-main.pug")
}

bookresp.onclick = () => {
    main.loadPage("bookresp-main.pug")
}

bookchief.onclick = () => {
    main.loadPage("bookchief-main.pug")
}

technician.onclick = () => {
    main.loadPage("tech-main.pug")
}