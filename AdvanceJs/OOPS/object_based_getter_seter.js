const User = {
    _email : 'user@example.com',
    _password  : 'test22',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const userA = Object.create(User)
console.log(userA.email);
