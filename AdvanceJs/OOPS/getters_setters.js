class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    
    get email() {
        return this._email.toUpperCase();
    }
    
    set email(value) {
        return this._email = value
    }
    get password(){
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password  = value
    }
}



let userA = new User('test@example.com', 'nan123');
console.log(userA.password);
console.log(userA.email);

