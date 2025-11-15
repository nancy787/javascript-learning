// also called prototypel inheritance

let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// to inject in object
Object.prototype.power = function(){
    console.log(`power is presendt in all users`);
    
}

heroPower.power()
// myHeros.power(); //power to al as we have given to object

// to inkect in arrray

Array.prototype.printUser = function() {
    console.log('power hero');
    
}

myHeros.printUser();
// heroPower.printUser(); //printUser  function will not be assible by obkect as we have give to lower hirarchy

// INHERITANCE

const User = {
    name : 'user1',
    email : 'demo@example.com'
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : 'JS assignement',
    fullTime : true,
    __proto__ : TeachingSupport  //inheritance
}

Teacher.__proto__= User;


// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //instead of __proto__


let foramattedUser = 'Nancy   '

String.prototype.trueLength = function(){
    // console.log(`${this}`) //current context referncece
    console.log(` ${this.trim().length}`);
}

'kumari    '.trueLength()
'bhagat'.trueLength()
foramattedUser.trueLength()

