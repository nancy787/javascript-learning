let element = document.createElement('div');
element.className = "btns";
let div = document.body.appendChild(element)
let btnElement = [];
for(let i = 1; i<= 9; i++){
     btnElement[i] = document.createElement('button')    
     btnElement[i].type ="button";
     btnElement[i].textContent = i;
     btnElement[i].id = `btn${i}`
    div.appendChild(btnElement[i])

    if(i == 3 || i == 6  || i==9){
        div.appendChild(document.createElement('br'));
    }
}

document.getElementById('btn5').addEventListener('click', function(){
    let order = [4, 1, 2, 3, 6, 9, 8, 7];
    const values = order.map(i => document.getElementById(`btn${i}`).textContent);
    values.unshift(values.pop());  //pop remove last element of an array
// add emelemt to start
    order.forEach((id, index) => {        
        document.getElementById(`btn${id}`).textContent = values[index];
    });

})