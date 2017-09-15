const remote = require('electron').remote
const main = remote.require('./main.js')


let img=document.getElementsByTagName("img")[0],
    trans=document.getElementById("trans");
trans.onmouseenter=()=>{
    img.style.filter="grayscale(0) blur(0)"
}
trans.onmouseleave=()=>{
    img.style.filter="grayscale(100%) blur(10px)"
}

let manager = document.getElementById("nav").children[0]
console.log(manager)

manager.onclick = () => {
    main.loadPage("manager.pug")
}

