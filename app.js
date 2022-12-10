console.log('Hello world from HTML')
let arrTop4 = ['liv', 'chelsea', 'Mu', 'Man city']
let arrLength = arrTop4.length
let i = 0
while(i < arrLength) {

    if(arrTop4[i].length === 8) {
        console.log('Top',i + 1,arrTop4[i])
    }else if(arrTop4[i].length === 3) {
        console.log('Top', i + 1, arrTop4[i])
    }else {
        
    }
    i++
}

let time = 20
if(time < 10) {
    console.log('good morning')
}else if( time < 13) {
    console.log('good afternul')
}else {
    console.log('I do not no')
}





