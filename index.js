/// Object literal

// 

let name = 'Khoa hoc ReactJS from zero to hero'
let price = 'Kho hoc co gia la: 1000$'

var Course = {
   name,
   price,
    getName: function() {
        return this.name
    }

}

console.log(Course.getName())


let fileName = 'new-name'
let filePrice = 'price'

var Course = {
    [fileName]: 'Javascript bazzic ',
    [filePrice]: 'Khoa hoc price',

}

console.log(Course)

