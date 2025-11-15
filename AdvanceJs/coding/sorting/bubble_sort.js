

// Array sorting 

// bubble sort

// ascending
function bubbleSort(n) {
    let length = n.length;
    for(let i = 0 ; i<length - 1; i++){
        for(let j = 0; j < length-i-1 ; j++){
            if(n[j] > n[j+1]){
                let temp = n[j];
                n[j] = n[j+1];
                n[j+1]  = temp;
            }
        }
    }
    return n;
}

console.log(bubbleSort([7,3,5,9,2]));


// desce

function bubbleSortDesc(n) {
    let length = n.length;
    for(let i = 0 ; i<length - 1; i++){
        for(let j = 0; j < length-i-1 ; j++){
            if(n[j] < n[j+1]){
                let temp = n[j];
                n[j] = n[j+1];
                n[j+1]  = temp;
            }
        }
    }
    return n;
}

console.log(bubbleSortDesc([7,3,5,9,2]));


    