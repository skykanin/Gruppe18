//Don't edit the js version of this ts document
const mysql = require('mysql');

class Login {
    usernameField = document.getElementById('username') as HTMLInputElement;
    passwordField = document.getElementById('password') as HTMLInputElement;
    errorField = document.getElementById('errorMessage') as HTMLElement;
    loginButton = document.getElementById('loginButton') as HTMLButtonElement;
    username: string;
    password: string;

    constructor() {
        this.loginButton.addEventListener("click", () => {
            this.validateForm();
            return false; //Prevents page from reloading
        });
    }

    validateForm():void {
        if (this.usernameField.value != null && this.usernameField.value != '' && this.passwordField.value != null && this.passwordField.value != '') {
            this.username = this.usernameField.value;
            this.password = this.passwordField.value;
            console.log(this.username);
            console.log(this.password);
            this.errorField.innerHTML = '';
        }
        else if (this.usernameField.value != null && this.usernameField.value != '') {
            this.username = this.usernameField.value;
            console.log(this.username);
            this.errorField.innerHTML = 'Missing password';
        }
        else if (this.passwordField.value != null && this.passwordField.value != '') {
            this.password = this.passwordField.value;
            console.log(this.password);
            this.errorField.innerHTML = 'Missing username';
        }
        else {
            this.errorField.innerHTML = 'Missing username and password';
        }
    }
}

window.onload = () => {
    let login = new Login();
}