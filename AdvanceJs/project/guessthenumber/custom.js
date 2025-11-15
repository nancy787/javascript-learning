let Realnumber = document.getElementById('randomValue');
let randomNumber = Math.floor(Math.random() * (100 - 1) * 1)
Realnumber.value = randomNumber;

function gussTheNumber() {
 let number =  document.getElementById('guessField').value;
 let error = document.querySelector('#errorMessage');
let message =  document.createTextNode('\n Try and guess a random number between 1 and 100.')
if(number < 1 || number > 100 ) {
     return error.appendChild(message)
}

let previous = document.querySelector('.guesses');
let value =  document.getElementById('guessField').value;
previous.textContent = value;

let lastResult = document.querySelector('.lastResult');
let Value = Number(lastResult.textContent);
Value--;
if(Value === 0){
     return lastResult.innerHTML = "Your changes is completed"
}
lastResult.innerHTML = Value;
if(Realnumber.value == value){
     return lastResult.innerHTML = "You win!!"
}
}