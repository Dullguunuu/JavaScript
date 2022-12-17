let random = Math.floor(Math.random() * 20 + 1);
console.log(random)

let myNum = document.querySelector("#myNumber");
let response = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");


let btn = document.querySelector(".check")
btn.addEventListener("click", () => {
    if (Number(myNum.value)) {
        if (random == myNum.value) {
            response.innerHTML = "Зөв таалаа";
            document.body.style.backgroundColor = '#60b347';
            btn.ariaDisabled = true;
            myNum.readOnly = true;

            highScore.innerHTML = score.innerHTML
        }
        else if (random < myNum.value) {
            response.innerHTML = "Их байна";
            score.innerHTML--;
        }
        else {
            response.innerHTML = "Бага байна";
            score.innerHTML--;
        }
    }
    else {
        response.innerHTML = "Тоо оруулна уу"
    }

    if (score.innerHTML == 0) {
        response.innerHTML = "Та хожигдлоо";
        document.body.style.backgroundColor = 'red';
    }
})

let againBtn = document.querySelector(".again")
againBtn.addEventListener("click", () => {
    response.innerHTML = "Тааж эхлээрэй...";
    score.innerHTML = "20";
    document.body.style.backgroundColor = "#222";
    myNum.readOnly = false;
    myNum.value = "";
})




// console.log();