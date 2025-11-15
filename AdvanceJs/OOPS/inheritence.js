class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`userName is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email   = email
        this.password   = password
    }

    addCourse() {
        console.log(`A new course was added ${this.username}`);
        
    }
}

const userA =new  Teacher('user2', 'test@mail.com', 'tesd');
userA.addCourse();
userA.logMe()

console.log(userA instanceof User)