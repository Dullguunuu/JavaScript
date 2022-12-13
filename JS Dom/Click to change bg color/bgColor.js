let btn = document.querySelector("button");
let para1 = document.querySelector("#line1");
let para2 = document.querySelector("#line2");

btn.addEventListener("click", () => {
    para1.style.backgroundColor = "red";
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    para2.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
})