// string is obect, array is object , function is also an object evenevery thing in js is function, prototye is object
function multiplyBy(num){
    return num * 5;
}
multiplyBy.power = 2;
console.log(multiplyBy(5)); //25
console.log(multiplyBy.power);//2
console.log(multiplyBy.prototype); //{}


function createUser(username, score){
    this.username = username;
    this.score  = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe  = function() {
    console.log(`score is ${this.score}`);
    
}
const user1 = new createUser("nancy", 290);
const user2 = new createUser("nancy", 280);

console.log(user1);
console.log(user2);
user1.printMe()
