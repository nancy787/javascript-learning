
const getPi = Object.getOwnPropertyDescriptor(Math, "PI")
getPi.writable = true;

Math.PI = 5;

const user = {
    name : "test",
    price : 200,
    isAvailable : true,

    getUser : function(){
        console.log('hello ');
        
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, 'name', {
    // writable : false, 
    enumerator : true
})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key, value] of Object.entries(user)) {
    if(typeof value !== "function") {
        console.log( `${key} : ${value}`);
    }
        
}   