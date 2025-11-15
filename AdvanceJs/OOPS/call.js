function setUserName(username) {
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password) {
    setUserName.call(this, username) //call hold te references it passwes the cureent context
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "test@example.com",  "233433")
console.log(chai);
