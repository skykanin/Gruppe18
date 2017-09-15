let remote = require('electron').remote;
    img=document.getElementsByTagName("img")[0],
    trans=document.getElementById("trans"),
    close=document.getElementById("close"),
    maximize=document.getElementById("maximize"),
    minimize=document.getElementById("minimize"),
    nav=document.getElementById("nav");
trans.onmouseenter=()=>{
img.style.filter="grayscale(0) blur(0)"
}
trans.onmouseleave=()=>{
img.style.filter="grayscale(100%) blur(10px)"
}
close.onclick=()=>{
    let window=remote.getCurrentWindow();
    window.close();
}
minimize.onclick=()=>{
    let window=remote.getCurrentWindow();
    window.minimize();
}
maximize.onclick=()=>{
    let window=remote.getCurrentWindow();
    window.maximize();
}
