let watch = document.getElementById("watch")
let startBtn = document.getElementById("startBtn")
let stopBtn = document.getElementById("stopBtn")

let timer = new Date();
timer.setMinutes(0, 0, 0);
watch.innerHTML = `${timer.getMinutes()} - ${timer.getSeconds()} - ${timer.getMilliseconds()}`;

// startBtn.addEventListener("click", ()=>{
//     let timer = setTimeout(,1000)
// })

// stopBtn.addEventListener("click", ()=>{

// })

// watch.innerHTML = `${date.getMinutes()} - ${date.getSeconds()} - ${date.getMilliseconds()}`