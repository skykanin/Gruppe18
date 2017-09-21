let home = document.getElementById("home"),
    manager = document.getElementById('man'),
    bookresp = document.getElementById('bookresp'),
    bookchief = document.getElementById("bookchief"),
    arranger = document.getElementById("arr"),
    tech = document.getElementById("tech"),

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
    main.loadPage("man-main.pug")
}

bookchief.onclick = () => {
    main.loadPage("bookchief-main.pug")
}

bookresp.onclick = () => {
    main.loadPage("bookresp-main.pug")
}

arranger.onclick = () => {
    main.loadPage("arr-main.pug")
}

tech.onclick = () => {
    main.loadPage("tech-main.pug")
}