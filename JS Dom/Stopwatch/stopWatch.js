

// time.setMinutes(0, 0, 0)

// let min = time.getMinutes();
// let sec = time.getSeconds();
// let mlSec = time.getMilliseconds();
// console.log(min + " : " + sec + " : " + mlSec)

// let tsag = document.getElementById("main")
// tsag.appendChild(date)

// let timeoutID;
// function showAlert() {
// timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
// }
// function clearAlert() {
// clearTimeout(timeoutID);
// }

// let counte = 0;
// setInterval(startInterval, 2000)
// function startInterval(){
// console.log(counte)
// counte++;
// }


let mainDiv = document.querySelector(".main");
let timer = document.querySelector(".timeArea");
let remain = document.querySelector(".rem");
let btn = document.getElementsByTagName("button");

let timing = new Date();

let day = `${timing.getDate()}`;
let hour = `${timing.getHours()}`;
let min = `${timing.getMinutes()}`;
let sec = `${timing.getSeconds()}`;

let dayRem = document.createElement("span");
let hourRem = document.createElement("span");
let minRem = document.createElement("span");
let secRem = document.createElement("span");

dayRem.innerHTML = 
hourRem.innerHTML = 
minRem.innerHTML = 
secRem.innerHTML = 

day.appendChild(dayRem)
hour.appendChild(hourRem)
min.appendChild(minRem)
sec.appendChild(secRem)

console.log(day)









