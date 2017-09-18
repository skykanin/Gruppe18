const remote = require('electron').remote;
const main = remote.require('./main.js');

var buttons = document.getElementsByClassName('buttons')  as HTMLCollectionOf<HTMLElement>;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.left = Math.cos(2*Math.PI*i/buttons.length)*250 + 285 - 15 + "px";
    buttons[i].style.top = Math.sin(2*Math.PI*i/buttons.length)*250 + 300 - 30 + "px";
}