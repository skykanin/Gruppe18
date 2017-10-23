"use strict";
class FrontPage {
    constructor() {
        this.nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png", "kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
        this.listElement = document.getElementsByClassName('listIndex');
        this.imgTags = document.getElementsByClassName('images');
        this.links = document.getElementsByClassName('links');
        this.logOutButton = document.getElementById('logOut');
        this.centralAngle = 360 / this.listElement.length;
        this.loggedInUser = main.locals.loggedIn;
        this.list = document.getElementsByClassName('listIndex');
        this.connection = main.connection;
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
            main.locals.loggedIn = "";
            window.location.href = "../html/loginPage.pug";
        };
    }
    checkLoggedInUser(user) {
        this.connection.query('SELECT * from USER', (err, result) => {
            if (err) {
                throw new Error("Error in query");
            }
            for (let i = 0; i < result.length; i++) {
                //console.log(this.loggedInUser == result[i].username);
                if (this.loggedInUser == result[i].username) {
                    this.setUserPermissions(result[i].usertype);
                    console.log(result[i].usertype);
                }
            }
        });
    }
    setUserPermissions(userType) {
        switch (userType) {
            case "Administrator":
                break;
            case "Booking Manager":
                this.list[0].style.backgroundColor = "#6D8383";
                this.list[0].disabled = true;
                this.list[1].style.backgroundColor = "#6D8383";
                this.list[1].disabled = true;
                this.list[2].style.backgroundColor = "#6D8383";
                this.list[2].disabled = true;
                this.list[5].style.backgroundColor = "#6D8383";
                this.list[5].disabled = true;
                this.list[6].style.backgroundColor = "#6D8383";
                this.list[6].disabled = true;
                break;
            case "Technician":
                this.list[0].style.backgroundColor = "#6D8383";
                this.list[0].disabled = true;
                this.list[1].style.backgroundColor = "#6D8383";
                this.list[1].disabled = true;
                this.list[2].style.backgroundColor = "#6D8383";
                this.list[2].disabled = true;
                this.list[7].style.backgroundColor = "#6D8383";
                this.list[7].disabled = true;
                break;
            case "Booking executive":
                this.list[0].style.backgroundColor = "#6D8383";
                this.list[0].disabled = true;
                this.list[5].style.backgroundColor = "#6D8383";
                this.list[5].disabled = true;
                this.list[6].style.backgroundColor = "#6D8383";
                this.list[6].disabled = true;
                this.list[7].style.backgroundColor = "#6D8383";
                this.list[7].disabled = true;
                break;
            case "Sound Technician":
                this.list[0].style.backgroundColor = "#6D8383";
                this.list[0].disabled = true;
                this.list[1].style.backgroundColor = "#6D8383";
                this.list[1].disabled = true;
                this.list[2].style.backgroundColor = "#6D8383";
                this.list[2].disabled = true;
                this.list[5].style.backgroundColor = "#6D8383";
                this.list[5].disabled = true;
                this.list[7].style.backgroundColor = "#6D8383";
                this.list[7].disabled = true;
                break;
            case "Light Technician":
                this.list[0].style.backgroundColor = "#6D8383";
                this.list[0].disabled = true;
                this.list[1].style.backgroundColor = "#6D8383";
                this.list[1].disabled = true;
                this.list[2].style.backgroundColor = "#6D8383";
                this.list[2].disabled = true;
                this.list[6].style.backgroundColor = "#6D8383";
                this.list[6].disabled = true;
                this.list[7].style.backgroundColor = "#6D8383";
                this.list[7].disabled = true;
                break;
            default:
                console.log("No matching cases");
        }
    }
}
<<<<<<< HEAD

listElement[0].onclick = () => {
    main.loadPage('arr-main.pug')
}

listElement[5].onclick = () => {
    main.loadPage('tech-main.pug')
}

listElement[6].onclick = () => {
    main.loadPage('tech-main.pug')
}
=======
window.onload = () => {
    let frontPage = new FrontPage();
};
>>>>>>> loginPage
