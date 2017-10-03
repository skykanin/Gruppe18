"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection = mysql.createConnection({
    host: 'mysql.stud.ntnu.no',
    user: 'andrris_gruppe18',
    password: 'cdji2005',
    database: 'andrris_gruppe18',
});
connection.connect();
class Register {
    constructor() {
        this.usernameField = document.getElementById('username');
        this.passwordFieldOne = document.getElementById('passwordOne');
        this.passwordFieldTwo = document.getElementById('passwordTwo');
        this.selectField = document.getElementById('userSelection');
        this.errorField = document.getElementById('errorMessage');
        this.loginButton = document.getElementById('loginButton');
        this.loginButton.addEventListener("click", () => {
            this.validateForm();
            return false; //Prevents page from reloading
        });
    }
    validateForm() {
        if (this.checkPasswordEquals() && !this.checkEmpty()) {
            console.log([this.usernameField.value, this.passwordFieldOne.value, this.passwordFieldTwo.value, this.selectField.value]);
        }
        else if (this.checkEmpty()) {
            console.log("One or several fields are empty");
        }
        else if (!this.checkPasswordEquals()) {
            console.log("Passwords don't match");
        }
    }
    checkPasswordEquals() {
        if (this.passwordFieldOne.value == this.passwordFieldTwo.value) {
            return true;
        }
        else {
            return false;
        }
    }
    checkEmpty() {
        if (this.usernameField.value == '' || this.passwordFieldOne.value == '' || this.passwordFieldTwo.value == '' || this.selectField.value == '') {
            return true;
        }
        else
            return false;
    }
}
window.onload = () => {
    let register = new Register();
};
