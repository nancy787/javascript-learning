let result = document.getElementById('result');

let btn0 = document.querySelector('#btn0').addEventListener('click', function(){
    let btnValue = document.querySelector('#btn0').textContent;
    let value = document.createTextNode(btnValue);
    result.appendChild(value);
});

let btn1 = document.querySelector('#btn1').addEventListener('click', function(){
    let btnValue = document.querySelector('#btn1').textContent;
    let value = document.createTextNode(btnValue);
    result.appendChild(value);
});

document.querySelector('.btnClr').addEventListener('click', function(){
    result.textContent = ''
})