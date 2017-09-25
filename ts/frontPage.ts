//Don't touch the js version of this ts document
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
    imgTags[i].id = "imgTag" + String(i);

}