let text = '';
let a = 0
switch (a) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML = text;
console.log('Text: ', text,)


let day = '';
let time  = 10

switch (time) {

  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
    default:
    day = '今日は木曜日です朝から今まで雨が降っています'

}

document.getElementById("demo").innerHTML = "Today is " + day;
console.log('To day is', day, )

