
// promise  is a object 
const promiseOne = new Promise(function(resolve, reject) {
    // do an asyn task like db call , network call etc
        setTimeout(function(){
            console.log("asynsc time interval");
            resolve();
        }, 1000)
});

promiseOne.then(function(){
    console.log('promise resolved called');
});

// promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async promise two");
    }, 1000)
}).then(function(){
    console.log("resolve called");
    
})

// Promise three

let PromiseThree = new Promise(function(resolve, reject){
    setTimeout( function() {
        resolve({ username : "demo", email : "demo@mail.com" });
    }, 1000);
})

PromiseThree.then( function(user){
    console.log(user);
    
})

// prmise 4 handle error reject resolve and finally
let promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;
            if(!error){
                resolve({ name : "nancy" , password : "kumari"})
            }else{
                reject('some error causein')
            }
        }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.name;
}).then( (name) => {
    console.log(name);
    
}).catch((error) => {
    console.log(error);
    
}).finally( () => {
    console.log('promise executred');
    
})


// Promise Five

const promiseFive = new Promise( ( resolve, reject)  => {
    setTimeout(function(){
            let error = false;
            if(!error){
                resolve({ name : "test" , password : "1234"})
            }else{
                reject('error promise five')
            }
        }, 1000);
})

async function handlePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
        // console.log(response.name);
    } catch (error) {
        console.log(error);
    }
}

handlePromiseFive()