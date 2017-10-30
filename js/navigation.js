let platform = process.platform;
let minimize = document.getElementById("minimize");
let maximize = document.getElementById("maximize");
let close = document.getElementById("close");
let home = document.getElementById("home");

if(platform == 'darwin'){
    minimize.parentNode.removeChild(minimize);
    maximize.parentNode.removeChild(maximize)
    close.parentNode.removeChild(close);
    home.style.position = "absolute";
    home.style.right = "0px";
}

minimize.addEventListener("click", (e) => {
    var window = remote.getCurrentWindow();
    window.minimize();
});

maximize.addEventListener("click", (e) => {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
});

close.addEventListener("click", (e) => {
    var window = remote.getCurrentWindow();
    window.close();
});

home.addEventListener("click", (e) => {
    main.loadPage('frontPage.pug')

});
