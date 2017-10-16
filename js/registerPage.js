"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordHAS = require("password-hash-and-salt");
const mainFile = require("../js/main");
class Register {
    constructor() {
        this.usernameField = document.getElementById('username');
        this.passwordFieldOne = document.getElementById('passwordOne');
        this.passwordFieldTwo = document.getElementById('passwordTwo');
        this.selectField = document.getElementById('userSelection');
        this.errorField = document.getElementById('errorMessage');
        this.loginButton = document.getElementById('loginButton');
        this.connection = mainFile.connection;
        //this.connection.connect();
        this.loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            var validate = this.validateForm();
            if (validate) {
                var duplicate = this.checkUsernameDuplicate();
                if (!duplicate) {
                    this.hashAndSaltPassword();
                }
            }
        });
    }
    validateForm() {
        if (this.checkPasswordEquals() && !this.checkEmpty()) {
            //console.log([this.usernameField.value, this.passwordFieldOne.value, this.passwordFieldTwo.value, this.selectField.value]);
            this.errorField.innerHTML = '';
            this.username = this.usernameField.value;
            this.password = this.passwordFieldOne.value;
            this.userType = this.selectField.value;
            return true;
        }
        else if (this.checkEmpty()) {
            this.errorField.innerHTML = "One or several fields are empty";
            return false;
        }
        else if (!this.checkPasswordEquals()) {
            this.errorField.innerHTML = "Passwords don't match";
            return false;
        }
        else {
            this.errorField.innerHTML = "Unknown error";
            return false;
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
    checkUsernameDuplicate() {
        this.connection.query('SELECT * from USER', (err, result) => {
            if (err) {
                console.log(err);
                return true;
            }
            for (let i = 0; i < result.length; i++) {
                if (this.username == result[i].username) {
                    this.errorField.innerHTML = "Username is already taken";
                    return true;
                }
            }
        });
        return false;
    }
    hashAndSaltPassword() {
        passwordHAS(this.password).hash((error, hash) => {
            if (error) {
                throw new Error('Something went wrong');
            }
            this.insertIntoDatabase(hash);
        });
    }
    insertIntoDatabase(hash) {
        let query = "INSERT INTO `USER`(`username`, `usertype`, `password`) VALUES (?,?,?)";
        let inputList = [this.username.toString(), this.userType.toString(), hash.toString()];
        console.log("test");
        console.log("INSERT INTO `USER`(`username`, `usertype`, `password`) VALUES " + `(${this.username.toString()},${this.userType.toString()},${hash.toString()})`);
        this.connection.query(query, inputList, (error, results, fields) => {
            if (error) {
                throw error;
            }
            else {
                this.errorField.style.color = '#FFF400';
                this.errorField.innerHTML = 'Account has been registered!';
            }
        });
    }
}
window.onload = () => {
    let register = new Register();
};
//# sourceMappingURL=registerPage.js.map