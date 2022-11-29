// Daalgavar 1

// Daalgavar 2

let n = 12;
if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
    console.log(n, 'сар 31 хоногтой');
}

else if (n == 4 || n == 6 || n == 9 || n == 11) {
    console.log(n, 'сар 30 хоногтой');
}

else if (n == 2) {
    console.log(n, 'сар 28 эсвэл 29 хоногтой');
}

else {
    console.log('сар биш байнаөөө')
}

// Daalgavar 3

let b = 121353543;
let a = b % 3, c = b % 7;
if (a == 0 || c == 0) {
    console.log('Оруулсан тоо 3 эсвэл 7-н үржвэр мөн байна ')
}
else {
    console.log('Оруулсан тоо 3 эсвэл 7-н үржвэр биш байна')
}

// Daalgavar 4

let n1 = -123;
if (n1 > 0) {
    console.log(n1, 'эерэг тоо')
}
else {
    console.log(n1, 'сөрөг тоо')
}

// Daalgavar 5

let weight = 50, height = 1.65, bodyIndex = (weight / (height * height));
if (bodyIndex < 18.5) {
    console.log('Жингийн дутагдалтай')
}

else if (18.5 > bodyIndex || bodyIndex < 25) {
    console.log('Эрүүл')
}

else if (25 > bodyIndex || bodyIndex < 29.9) {
    console.log('Илүүдэл жинтэй')
}

else {
    console.log('Хэт таргалалттай')
}

// Daalgavar 6

let y = 122, x = y % 2
if (x == 0) {
    console.log('тэгш')
}
else {
    console.log('сондгой')
}

// Daalgavar 7

let n2 = -123;
if (n2 > 0) {
    console.log(n2, 'эерэг тоо')
}
else {
    console.log(n2, 'сөрөг тоо')
}

// Daalgavar 8

let yearOfBirth = 1997, old = 2022 - yearOfBirth;
if (0 <= old && old <= 1) {
    console.log('Infant')
}
else if (1 < old && old <= 3) {
    console.log('Toddler')
}
else if (3 < old && old <= 5) {
    console.log('Preschool')
}
else if (5 < old && old <= 12) {
    console.log('Gradesschooler')
}
else if (12 < old && old <= 18) {
    console.log('Teen')
}
else if (18 < old && old <= 21) {
    console.log('Young adult')
}
else {
    console.log('Adult')
}
