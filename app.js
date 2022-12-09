let car = ['BMW', 'VOLVO','SAAB','FORD']

let i = 0;
let carLength = car.length
let test = ''

for( ; i < carLength; ) {
    i++;
    test += car[i] + '<br>'
}

document.getElementById("demo").innerHTML = test