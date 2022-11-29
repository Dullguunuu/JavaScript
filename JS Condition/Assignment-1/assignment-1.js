// Daalgavar 1

let i = 4 > 3; //true
let ii = 4 >= 3; //true
let iii = 4 < 3; //false
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(i)
console.log(ii)
console.log(iii)
console.log(iv)
console.log(v)
console.log(vi)
console.log(vii)
console.log(iix)
console.log(ix)
console.log(x)
console.log(xi)

// Daalgavar 2

let one = 4 > 3 && 10 < 12;  //true
let two = 4 > 3 && 10 > 12;  //false
let three = 4 > 3 || 10 < 12;   //true
let four = 4 > 3 || 10 > 12;    //true
let five = !(4 > 3);    //false
let six = !(4 < 3);   //true
let eight = !(4 > 3 && 10 < 12);    //false
let nine = !(4 > 3 && 10 > 12);     //true
let ten = !(4 === "4");      //true

console.log('one', one)
console.log('two', two)
console.log('three', three)
console.log('four', four)
console.log('five', five)
console.log('six', six)
console.log('eight', eight)
console.log('nine', nine)
console.log('ten', ten)

// Daalgavar 3

let yourAge = prompt('Таны нас')
let myAge = prompt('Миний нас')
if (yourAge > myAge)
    console.log('Та хөгшин')
else
    console.log('Би хөгшин')

// Daalgavar 4

let day = 5
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Ажлын өдөр')
        break
    case 6:
    case 7:
        console.log('Амралтын өдөр')
        break
}

// Daalgavar 5

let hours = prompt('Та цагаа оруулна уу')
let ratePerHour = prompt('Та цагийн хөлсөө оруулна уу')
console.log('Таны цалин', hours * ratePerHour)



