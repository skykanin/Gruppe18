class Register {
    usernameField = document.getElementById('username') as HTMLInputElement;
    passwordFieldOne = document.getElementById('passwordOne') as HTMLInputElement;
    passwordFieldTwo = document.getElementById('passwordTwo') as HTMLInputElement;
    selectField = document.getElementById('userSelection') as HTMLSelectElement;
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

    validateForm(): void {
        if(this.checkPasswordEquals() && !this.checkEmpty()) {
            console.log([this.usernameField.value, this.passwordFieldOne.value, this.passwordFieldTwo.value, this.selectField.value]);
        } else if(!this.checkPasswordEquals()) {
            console.log("Passwords don't match or are empty");
        }
    }

    checkPasswordEquals(): boolean {
        if(this.passwordFieldOne.value == this.passwordFieldTwo.value && this.passwordFieldOne.value != '' && this.passwordFieldTwo.value != '') {
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

}

window.onload = () => {
    let register = new Register();
}