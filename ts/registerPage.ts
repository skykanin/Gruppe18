import * as mysql from 'mysql';
import * as passwordHAS from 'password-hash-and-salt';
import * as mainFile from '../js/main';

class Register {
    usernameField = document.getElementById('username') as HTMLInputElement;
    passwordFieldOne = document.getElementById('passwordOne') as HTMLInputElement;
    passwordFieldTwo = document.getElementById('passwordTwo') as HTMLInputElement;
    selectField = document.getElementById('userSelection') as HTMLSelectElement;
    errorField = document.getElementById('errorMessage') as HTMLElement;
    loginButton = document.getElementById('loginButton') as HTMLButtonElement;
    connection: any;
    username: string;
    password: string;
    userType: string;

    constructor() {
        this.connection = mainFile.connection;
        //this.connection.connect();
        this.loginButton.addEventListener("click", (e: any) => {
            e.preventDefault();
            var validate = this.validateForm();
            if(validate) {
                var duplicate = this.checkUsernameDuplicate();
                if(!duplicate) {
                    this.hashAndSaltPassword();
                }
            }
        });
    }

    validateForm(): boolean {
        if(this.checkPasswordEquals() && !this.checkEmpty()) {
            //console.log([this.usernameField.value, this.passwordFieldOne.value, this.passwordFieldTwo.value, this.selectField.value]);
            this.errorField.innerHTML = '';
            this.username = this.usernameField.value;
            this.password = this.passwordFieldOne.value;
            this.userType = this.selectField.value;
            return true;
        } else if (this.checkEmpty()) {
            this.errorField.innerHTML = "One or several fields are empty";
            return false;
        }
        else if(!this.checkPasswordEquals()) {
            this.errorField.innerHTML = "Passwords don't match";
            return false;
        } else {
            this.errorField.innerHTML = "Unknown error";
            return false;
        }
    }

    checkPasswordEquals(): boolean {
        if(this.passwordFieldOne.value == this.passwordFieldTwo.value) {
            return true;
        } else {
            return false;
        }
    }

    checkEmpty():boolean {
        if(this.usernameField.value == '' || this.passwordFieldOne.value == '' || this.passwordFieldTwo.value == '' || this.selectField.value == '') {
            return true;
        } else return false;
    }

    checkUsernameDuplicate():boolean {
        this.connection.query('SELECT * from USER', (err, result) => {
            if(err) {
                console.log(err);
                return true;
            }
            for(let i = 0; i < result.length; i++) {
                if(this.username == result[i].username) { //checks if username already exists in database
                    this.errorField.innerHTML = "Username is already taken";
                    return true;
                }
            }
        });
        return false;
    }

    hashAndSaltPassword():void {
        passwordHAS(this.password).hash((error, hash) => {
            if(error) {
                throw new Error('Something went wrong');
            }
            this.insertIntoDatabase(hash);
        });
    }

    insertIntoDatabase(hash: any):void {
        let query = "INSERT INTO `USER`(`username`, `usertype`, `password`) VALUES (?,?,?)";
        let inputList = [this.username.toString(),this.userType.toString(), hash.toString()];
        console.log("test");
        console.log("INSERT INTO `USER`(`username`, `usertype`, `password`) VALUES " + `(${this.username.toString()},${this.userType.toString()},${hash.toString()})`);
        this.connection.query(query, inputList, (error, results, fields) => {
            if(error) {
                throw error;
            } else {
                this.errorField.style.color = '#FFF400';
                this.errorField.innerHTML = 'Account has been registered!';
            }
        });
    }
    
}

window.onload = () => {
    let register = new Register();
}