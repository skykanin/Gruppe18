//Don't touch the js version of this ts document
class FrontPage {
    nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png","kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
    listElement = document.getElementsByClassName('listIndex') as HTMLCollectionOf<HTMLElement>;
    imgTags = document.getElementsByClassName('images') as HTMLCollectionOf<HTMLImageElement>;
    links = document.getElementsByClassName('links') as HTMLCollectionOf<HTMLElement>;
    logOutButton = document.getElementById('logOut') as HTMLButtonElement;
    centralAngle = 360/this.listElement.length;

    constructor() {
        this.makeWheel();
        this.addLogOut();
    }

    makeWheel() {
        for(let i = 0; i < this.listElement.length; i++) {
            this.listElement[i].style.transform = "rotate("+String(this.centralAngle*i)+"deg)";
            this.listElement[i].style.transform += "skew("+String(90-this.centralAngle)+"deg)";
            this.listElement[i].style.backgroundColor = "hsl("+45*i+", 70%, 50%)";
        
            this.links[i].style.transform = "skew("+String(-(90-this.centralAngle))+"deg)";
            this.links[i].style.transform += "rotate("+String(-this.centralAngle*i)+"deg)";
        
            this.imgTags[i].src = "../images/menu icons/" + this.nameList[i];
            this.imgTags[i].id = "imgTag" + String(i);
        
        }
    }

    addLogOut() {
        this.logOutButton.onclick = () => {
            window.location.href = "../html/loginPage.pug";
        }
    }
}
window.onload = () => {
    let frontPage = new FrontPage();
}
