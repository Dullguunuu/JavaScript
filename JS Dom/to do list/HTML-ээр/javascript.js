//  Ehnii heseg 

let date = document.getElementById("date")
let rem = document.getElementById("rem")
let ognoo = new Date();
let btn = document.getElementById("btn");

document.getElementById("title1").innerHTML = "Todo List App";

date.innerHTML = `Он сар өдөр: ${ognoo.getFullYear()} - ${ognoo.getMonth() + 1} - ${ognoo.getDate()}`;

document.getElementById("task").placeholder = "Таскын нэрээ оруулна уу"
btn.innerHTML = "+нэмэх";


// 2doh heseh 

document.getElementById("title2").innerHTML = "Жагсаалт";

btn.addEventListener("click", () => {

})

