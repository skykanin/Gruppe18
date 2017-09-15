const remote = require('electron').remote
const main = remote.require('./main.js')


let home = document.getElementById("home")
let manager = document.getElementById("manager")

console.log(manager)

home.onclick = () => {
    main.loadPage("index.pug")
}

manager.onclick = () => {
    main.loadPage("manager.pug")
}
