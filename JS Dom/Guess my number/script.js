let a = Math.floor(Math.random() * 20 + 1);
let randomNum = document.querySelector(".guess");
randomNum = a;
console.log(randomNum)


let b = document.getElementById("myNumber").value;

let btn = document.querySelector(".check")
btn.addEventListener("click", () => {
    // let wrong;
    // let output;

    if (a == b) {
        document.querySelector(".message").innerHTML = "Зөв таалаа";
        document.body.style.backgroundColor = '#60b347';
    }
    else if (a < b) {
        document.querySelector(".message").innerHTML = "Их байна";
        // wrong--;
    }
    else if (a > b) {
        document.querySelector(".message").innerHTML = "Бага байна";
        // wrong--;
    }
    else {
        document.querySelector(".message").innerHTML = "Тоо оруулна уу"
    }
})



// console.log();