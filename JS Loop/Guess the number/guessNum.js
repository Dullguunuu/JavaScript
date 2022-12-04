let randomNumber = 50;
let a = prompt("Тоо оруулна уу");
let b = Number(a)


while (randomNumber == b)
{
    if (randomNumber<b)
    b++;
}

if (randomNumber == b)
{
    console.log(randomNumber, "\n та дээрх тоог тааж чадлаа");
}

else 
{
    console.log("Таны оруулсан тоо их байна");
}
