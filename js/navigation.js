document.getElementById("minimize").addEventListener("click", (e) => {
    var window = remote.getCurrentWindow();
    window.minimize();
});

document.getElementById("maximize").addEventListener("click", (e) => {
    var window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
});

document.getElementById("close").addEventListener("click", (e) => {
    var window = remote.getCurrentWindow();
    window.close();
});