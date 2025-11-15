function calculateBMI() {
    let Height = document.getElementById('height').value;
    let Weight = document.getElementById('weight').value;

    if(Height == '') {
        return document.getElementById('error').innerHTML = "requried";
    }

    if(Weight == '') {
        return document.getElementById('weighterror').innerHTML = "requried";
    }

    let result = document.getElementById('results');
    const BMI = (Weight / ((Height / 100) ** 2)).toFixed(2);
    result.appendChild(document.createTextNode(BMI))

    if(result < '18.6'){
        return result.append(' you are under weight')
    } else if(result > '18.6' && result < '24.9'){
        return result.append(' you are in nomal rnce ght')
    } else if(result < '24.9') {
        return result.append(' you are over weight')
    }
}

function clear() {
    window.location.reload();
}