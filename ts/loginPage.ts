//Don't edit the js version of this ts document
import * as mysql from 'mysql';
import * as passwordHAS from 'password-hash-and-salt';

class Login {
    usernameField = document.getElementById('username') as HTMLInputElement;
    passwordField = document.getElementById('password') as HTMLInputElement;
    errorField = document.getElementById('errorMessage') as HTMLElement;
    loginButton = document.getElementById('loginButton') as HTMLButtonElement;
    connection: mysql.IConnection;
    username: string;
    password: string;
    databasePassword: string;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'mysql.stud.ntnu.no',
            user: 'andrris_gruppe18',
            password: 'cdji2005',
            database: 'andrris_gruppe18',
        });
        this.loginButton.addEventListener("click", (e: any) => {
            e.preventDefault(); //Prevents page from reloading
            if(this.validateForm()) {
                this.checkUsernameExists();
            }
        });
    }

    validateForm():boolean {
        if (this.usernameField.value != '' && this.passwordField.value != '') {
            this.username = this.usernameField.value;
            this.password = this.passwordField.value;
            this.errorField.innerHTML = '';
            return true;
        }
        else if (this.usernameField.value != '') {
            this.username = this.usernameField.value;
            console.log(this.username);
            this.errorField.innerHTML = 'Missing password';
            return false;
        }
        else if (this.passwordField.value != '') {
            this.password = this.passwordField.value;
            console.log(this.password);
            this.errorField.innerHTML = 'Missing username';
            return false;
        }
        else {
            this.errorField.innerHTML = 'Missing username and password';
            return false;
        }
    }

    checkUsernameExists():void {
        this.connection.query('SELECT * from USER', (err, result) => {
            if(err) {
                console.log(err);
            }
            for(let i = 0; i < result.length; i++) {
                if(this.username == result[i].username) { //checks if username exists in database
                    this.errorField.innerHTML = "";
                    this.checkPassword(result[i].password);
                }
            }
        });
        this.errorField.innerHTML = "Username doesn't exist";
    }

    checkPassword(databasePassword: string):void {
        passwordHAS(this.password).verifyAgainst(databasePassword, (error, verified) => {
            if(error)
                throw new Error('Something went wrong!');
            if(!verified) {
                this.errorField.innerHTML = "Incorrect password";
                throw new Error('Incorrect password');
            } else {
                window.location.href = "../html/frontpage.pug";
            }
        });
    }
}

window.onload = () => {
    let login = new Login();
}