//Don't edit the js version of this ts document
var mysql = require('mysql');
class Login {
    constructor() {
        this.usernameField = document.getElementById('username');
        this.passwordField = document.getElementById('password');
        this.errorField = document.getElementById('errorMessage');
        this.loginButton = document.getElementById('loginButton');
        this.loginButton.addEventListener("click", () => {
            this.validateForm();
            return false; //Prevents page from reloading
        });
    }
    validateForm() {
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
};
