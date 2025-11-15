class User{
    constructor(username, email, password) {
        this.username   = username
        this.email   = email
        this.password   = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    captializeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const user = new User('test', 'test@example.com', '233');
console.log(user.encryptPassword());
console.log(user.captializeUserName());

// behind the scene

function UserTest(username, email, password) {
        this.username   = username
        this.email   = email
        this.password   = password
    }

UserTest.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

UserTest.prototype.captializeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const user1 = new UserTest('UserTest', 'UserTest@example.com', '2332');
console.log(user1.captializeUserName());
console.log(user1.encryptPassword());
