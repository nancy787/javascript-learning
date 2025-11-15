let key = document.querySelector('body').addEventListener('keypress', function(event){
    let data = document.querySelector('.key');
    data.textContent = `You have pressed ${ event.code } key on you keyboard` ;
    console.log(data);
});