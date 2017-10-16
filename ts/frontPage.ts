//Don't touch the js version of this ts document
import * as mysql from 'mysql';
import * as mainFile from '../main.js';

class FrontPage {
    nameList = ["arrangor.png", "bookingansvarlig.png", "bookingsjef.png","kontakt.png", "kundeservice.png", "lydtekniker.png", "lystekniker.png", "manager.png"];
    listElement = document.getElementsByClassName('listIndex') as HTMLCollectionOf<HTMLElement>;
    imgTags = document.getElementsByClassName('images') as HTMLCollectionOf<HTMLImageElement>;
    links = document.getElementsByClassName('links') as HTMLCollectionOf<HTMLElement>;
    logOutButton = document.getElementById('logOut') as HTMLButtonElement;
    centralAngle = 360/this.listElement.length;
    loggedInUser = mainFile.locals.loggedIn;
    connection: mysql.IConnection;

    constructor() {
        this.connection = mainFile.connection;
        //this.connection.connect();
        this.makeWheel();
        this.addLogOut();
        this.checkLoggedInUser(this.loggedInUser);
    }

    makeWheel():void {
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

    addLogOut():void {
        this.logOutButton.onclick = () => {
            window.location.href = "../html/loginPage.pug";
        }
    }

    checkLoggedInUser(user: string):void {
        this.connection.query('SELECT * from USER', (err, result) => {
            if(err) {
                throw new Error("Error in query");
            }
            for(let i = 0; i < result.length; i++) {
                if(this.loggedInUser == result[i].username) { //checks if logged in user exists in database and get user type
                   this.setUserPermissions(result[i].userType);
                } else {
                    throw new Error("Can't find logged in user in database");
                }
            }
        });
    }

    setUserPermissions(userType: string):void {
        switch(userType) {
            case "Administrator": {
                //Do nothing
            }
            
            case "Booking Manager": {
                
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
}
