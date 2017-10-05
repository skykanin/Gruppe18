//Don't touch the js version of this ts document
class FrontPage {
    constructor() {
        this.nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png", "kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
        this.listElement = document.getElementsByClassName('listIndex');
        this.imgTags = document.getElementsByClassName('images');
        this.links = document.getElementsByClassName('links');
        this.logOutButton = document.getElementById('logOut');
        this.centralAngle = 360 / this.listElement.length;
        this.makeWheel();
        this.addLogOut();
    }
    makeWheel() {
        for (let i = 0; i < this.listElement.length; i++) {
            this.listElement[i].style.transform = "rotate(" + String(this.centralAngle * i) + "deg)";
            this.listElement[i].style.transform += "skew(" + String(90 - this.centralAngle) + "deg)";
            this.listElement[i].style.backgroundColor = "hsl(" + 45 * i + ", 70%, 50%)";
            this.links[i].style.transform = "skew(" + String(-(90 - this.centralAngle)) + "deg)";
            this.links[i].style.transform += "rotate(" + String(-this.centralAngle * i) + "deg)";
            this.imgTags[i].src = "../images/menu icons/" + this.nameList[i];
            this.imgTags[i].id = "imgTag" + String(i);
        }
    }
    addLogOut() {
        this.logOutButton.onclick = () => {
            window.location.href = "../html/loginPage.pug";
        };
    }
}
let frontPage = new FrontPage();
