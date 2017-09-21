let remote = require('electron').remote,
    close=document.getElementById("close"),
    maximize=document.getElementById("maximize"),
    minimize=document.getElementById("minimize"),
    nav=document.getElementById("nav"),
    trackpiece=document.getElementById("trackpiece"),
    slider1=document.getElementById("slider1"),
    slider2=document.getElementById("slider2"),
    p2=document.getElementById("p2");
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
    var startx=e.pageX,
        lastpos=trackpiece.style.left.substr(0,trackpiece.style.left.length-2);
    console.log(lastpos)
    window.onmousemove=function(e){
        var delta=lastpos/100*window.innerWidth+startx-e.pageX;
        console.log(delta-lastpos/100*window.innerWidth)
        if(delta+9+3<window.innerWidth && delta+200-3>0){
            trackpiece.style.left=(delta)/window.innerWidth*100+"vw"
            slider1.style.width=(delta+200)/window.innerWidth*100+"vw"
            slider2.style.left=(delta+200)/window.innerWidth*100+"vw"
            slider2.style.width=(window.innerWidth-delta-200)/window.innerWidth*100+"vw"
            p2.style.left=-(delta+200)/window.innerWidth*100+"vw"
        }
    }
}
window.onmouseup=(e)=>{
    window.onmousemove=function(){
    }
}
window.onresize=()=>{
}
