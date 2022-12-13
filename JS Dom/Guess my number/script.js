let a = Math.floor(Math.random()*20 +1);
let randomNum = document.querySelector(".guess");
randomNum = a;
console.log(randomNum)


let b = document.getElementById("myNumber").value;

let btn = document.querySelector(".check")
btn.addEventListener("click", () => {
    let wrong = document.querySelector(".score").innerHTML
    let output = document.querySelector(".message").innerHTML

    if ( a == b )
    {
        output = "Зөв таалаа";
        document.body.style.backgroundColor = '#60b347'; 
    }
    else if (a < b)
    {
        output = "Их байна";
        wrong--;
    }
    else if (a > b)
    {
        output = "Бага байна";
        wrong--;
    }
    else
    {
        output = "Тоо оруулна уу"   
    }
})



// console.log();