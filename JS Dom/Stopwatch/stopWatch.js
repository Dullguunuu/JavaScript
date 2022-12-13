let time = new Date();

time.setMinutes(0, 0, 0)

let min = time.getMinutes();
let sec = time.getSeconds();
let mlSec = time.getMilliseconds();
console.log(min + " : " + sec + " : " + mlSec)

// let tsag = document.getElementById("main")
// tsag.appendChild(date)