const user = {
    name:"nancy",
    email : "bhagah@mail.com",
    
    getuserDetails : function(){
        console.log(this);
        
        console.log(this.name);
        
    }
}
//this is caleled object literaslhdktis, collection , method/functio
console.log(user.getuserDetails());

function UserData(name, email, password){
    this.name = name
    this.email = email
    this.password = password

    // return this js implestyl return thsi
}


const userOne = new UserData("nancy", "test@mail.com", "223");
const userTwo = new UserData("nan", "demo@mail.com", "111");

console.log(userOne.constructor);
console.log(userTwo);


// New Keywod
// when we use new a empty object created
// step 1 new object is created
// setep 2 a construtro function called new keyword
// step 3 all the arguments is injected
// step 4we receifn data in functopm


