// Lexical Scoping

// if function iside function then inner function will get all the access to innefr function
function outer() {
    let username ="nancy";
    // console.log("outer", message);
    function inner() {
        let message ="test"
        console.log('inner', username);
        console.log(message);
    }
    function innerTwe() {
        console.log('innerToo', username);
        // console.log(message);
        
    }
    inner()
    innerTwe()
}   
outer()
// console.log('outerise the scope', username);

// Closure

function makeFunc() {
    const name  = "Mozilla"
    function displayName() {
        console.log(name);
    }

    return displayName
}

const myFunc = makeFunc();
myFunc();


