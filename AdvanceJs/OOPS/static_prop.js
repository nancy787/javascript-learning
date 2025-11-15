class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(
         `${this.username} is logged in`)
    }
    static createId() { //static stops access of method or property
        return `1232`
    }
}

const userA = new User('nancy');
// console.log(userA.createId()); //will give your error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher('testteacge', 'test@mail.com');
teacher.logMe();
