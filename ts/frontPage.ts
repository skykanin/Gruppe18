//Don't touch the js version of this ts document
const remote = require('electron').remote;
const main = remote.require('./main.js');

var nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png","kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
var listElement = document.getElementsByClassName('listIndex') as HTMLCollectionOf<HTMLElement>;
var imgTags = document.getElementsByClassName('images') as HTMLCollectionOf<HTMLImageElement>;
var links = document.getElementsByClassName('links') as HTMLCollectionOf<HTMLElement>;

var centralAngle = 360/listElement.length;

for(let i = 0; i < listElement.length; i++) {
    listElement[i].style.transform = "rotate("+String(centralAngle*i)+"deg)";
    listElement[i].style.transform += "skew("+String(90-centralAngle)+"deg)";
    listElement[i].style.backgroundColor = "hsl("+45*i+", 70%, 50%)";

    links[i].style.transform = "skew("+String(-(90-centralAngle))+"deg)";
    links[i].style.transform += "rotate("+String(-centralAngle*i)+"deg)";

    imgTags[i].src = "../images/menu icons/" + nameList[i];

    // imgTags[i].style.left = String(130*Math.cos(2*Math.PI*i/listElement.length)) + "px";
    // imgTags[i].style.top = String(110*Math.cos(2*Math.PI*i/listElement.length)) + "px";
    imgTags[i].id = "imgTag" + String(i);

}