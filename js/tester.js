let remote = require('electron').remote;
    img=document.getElementsByTagName("img")[0],
    trans=document.getElementById("trans"),
    close=document.getElementById("close"),
    maximize=document.getElementById("maximize"),
    minimize=document.getElementById("minimize"),
    nav=document.getElementById("nav"),
    trackpiece=document.getElementById("trackpiece"),
    slider1=document.getElementById("slider1"),
    slider2=document.getElementById("slider2"),
    p2=document.getElementById("p2");
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
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
}
trackpiece.onmousedown=function(e){
    window.onmousemove=function(e){
        trackpiece.style.left=e.pageX/window.innerWidth*100+"vw"
        slider1.style.width=e.pageX/window.innerWidth*100+"vw"
        slider2.style.left=e.pageX/window.innerWidth*100+"vw"
        slider2.style.width=(window.innerWidth-e.pageX)/window.innerWidth*100+"vw"
        p2.style.left=-e.pageX/window.innerWidth*100+"vw"
    }
}
window.onmouseup=(e)=>{
    window.onmousemove=function(){
    }
}
window.onresize=()=>{
}
