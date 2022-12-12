let button = document.querySelector("button");
let bg = document.querySelector("body")

button.addEventListener("click", () => {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    bg.style.backgroundColor = "rgb(" + a + "," + b + "," +c + ")";
})

