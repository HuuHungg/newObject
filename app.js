let car = ['BMW', 'VOLVO','SAAB','FORD']

let i = 0;
let carLength = car.length
let test = ''

for( ; i < carLength; ) {
    i++;
    test += car[i] + '<br>'
}

document.getElementById("demo").innerHTML = test


let course = ["Javascript", "PHP", "Course"]
let courses = course.length

for( let i = 0; i < courses; i++) { 
    console.log(car[i])
}


let animal = function(name,weight,leg) {
    this.name = name
    this.weight = weight
    this.leg = leg
}

let vetAnimal = new animal ("Prrot", 200, 2)

console.log(vetAnimal)