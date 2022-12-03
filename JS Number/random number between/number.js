let aStr = prompt ("Тоо оруулна уу");
let bStr = prompt ("Тоо оруулна уу");
let a = Number(aStr);
let b = Number(bStr);
let random = 0;

if (a>b)
{
    random = Math.random() * (a-b) + b;
    console.log(random);
}

else
{
    random = Math.random() * (b-a) + a;
    console.log(random);
}
