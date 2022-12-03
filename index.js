function hightlight([first, ...strings], ...values) {  
    return values.reduce(
        (acc,curr) =>[...acc, `<span>${curr}</span>`,strings.shift()],
        [first]
    )
    .join('')
}   

var brand = 'F8';
var course = 'Javascript';

const html =  hightlight`Hoc lap trinh ${course} tai ${brand}!`;
console.log(html)

