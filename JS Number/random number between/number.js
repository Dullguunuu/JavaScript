let a = prompt ("Тоо оруулна уу");
let b = prompt ("Тоо оруулна уу");
let genNumber = 0;
if (a>b)
{
    genNumber = Math.random() * (a-b) + a;
    console.log(genNumber);
}


else
{
    genNumber = Math.random() * (b-a) + b;
    console.log(genNumber);
}
