//Don't touch the js version of this ts document
/*const remote = require('electron').remote;
const main = remote.require('./main.js');

var buttons = document.getElementsByClassName('buttons') as HTMLCollectionOf<HTMLElement>;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.left = Math.cos(2*Math.PI*i/buttons.length +1.5*Math.PI)*250 + 285 - 15 + "px";
    buttons[i].style.top = Math.sin(2*Math.PI*i/buttons.length +1.5*Math.PI)*250 + 300 - 30 + "px";
}*/
wheel = new wheelnav("wheelDiv", null, 600, 600);
wheel.slicePathFunction = slicePath().DonutSlice;
wheel.markerPathFunction = markerPath().PieLineMarker;
wheel.clickModeRotate = false;
wheel.colors = colorpalette.fractallove;
wheel.markerEnable = true;
wheel.createWheel(["1","2","3","4","5","6","7","8"]);
wheel.sliceHoverAttr = { stroke: '#000000', 'stroke-width': 4 };
wheel.lineHoverAttr = { stroke: '#000000', 'stroke-width': 3 };
wheel.titleHoverAttr = { fill: '#000000', stroke: 'none' };
wheel.refreshWheel();