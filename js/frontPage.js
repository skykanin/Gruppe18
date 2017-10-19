"use strict";
const mainFile = require("main.js");
class FrontPage {
    constructor() {
        this.nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png", "kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
        this.listElement = document.getElementsByClassName('listIndex');
        this.imgTags = document.getElementsByClassName('images');
        this.links = document.getElementsByClassName('links');
        this.logOutButton = document.getElementById('logOut');
        this.centralAngle = 360 / this.listElement.length;
        this.loggedInUser = mainFile.locals.loggedIn;
        this.connection = mainFile.connection;
        //this.connection.connect();
        this.makeWheel();
        this.addLogOut();
        this.checkLoggedInUser(this.loggedInUser);
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
    checkLoggedInUser(user) {
        this.connection.query('SELECT * from USER', (err, result) => {
            if (err) {
                throw new Error("Error in query");
            }
            for (let i = 0; i < result.length; i++) {
                if (this.loggedInUser == result[i].username) {
                    this.setUserPermissions(result[i].userType);
                }
                else {
                    throw new Error("Can't find logged in user in database");
                }
            }
        });
    }
    setUserPermissions(userType) {
        switch (userType) {
            case "Administrator": {
                //Do nothing
            }
            case "Booking Manager": {
                //idk
            }
            case "Technician": {
            }
            case "Booking executive": {
            }
            case "Sound Technician": {
            }
            case "Light Technician": {
            }
        }
    }
}
window.onload = () => {
    let frontPage = new FrontPage();
};
//# sourceMappingURL=frontPage.js.map