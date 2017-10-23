"use strict";
const passwordHAS = require("password-hash-and-salt");
//const mainFile = require('electron').remote.require('../main')
//console.log(mainFile)
class Login {
    constructor() {
        this.usernameField = document.getElementById('username');
        this.passwordField = document.getElementById('password');
        this.errorField = document.getElementById('errorMessage');
        this.loginButton = document.getElementById('loginButton');
        this.connection = main.connection;
        //this.connection.connect();
        this.loginButton.addEventListener("click", (e) => {
            e.preventDefault(); //Prevents page from reloading
            if (this.validateForm()) {
                this.checkUsernameExists();
            }
        });
    }
    validateForm() {
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
    checkUsernameExists() {
        this.connection.query('SELECT * from USER', (err, result) => {
            if (err) {
                console.log(err);
            }
            for (let i = 0; i < result.length; i++) {
                if (this.username == result[i].username) {
                    this.errorField.innerHTML = "";
                    this.checkPassword(result[i].password);
                }
            }
        });
        this.errorField.innerHTML = "Username doesn't exist";
    }
    checkPassword(databasePassword) {
        passwordHAS(this.password).verifyAgainst(databasePassword, (error, verified) => {
            if (error)
                throw new Error('Something went wrong!');
            if (!verified) {
                this.errorField.innerHTML = "Incorrect password";
                throw new Error('Incorrect password');
            }
            else {
                main.locals.loggedIn = this.username;
                window.location.href = "../html/frontPage.pug";
            }
        });
    }
}
window.onload = () => {
    let login = new Login();
};