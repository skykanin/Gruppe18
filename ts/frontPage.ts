//Don't touch the js version of this ts document
const remote = require('electron').remote;
const main = remote.require('./main.js');

var nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png","kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
var listElement = document.getElementsByClassName('listIndex') as HTMLCollectionOf<HTMLElement>;
var imgTags = document.getElementsByClassName('images') as HTMLCollectionOf<HTMLImageElement>;

for(let i = 0; i < listElement.length; i++) {
    listElement[i].style.transform = "rotate("+String(360/8*i)+"deg)";
    listElement[i].style.transform += "skew("+String(90-360/8)+"deg)";

    imgTags[i].src = "../images/menu icons/" + nameList[i];
    imgTags[i].style.transform = "rotate("+String(-360/8*i)+"deg)";
    imgTags[i].style.transform += "skew("+String(-90-360/8)+"deg)";
}
