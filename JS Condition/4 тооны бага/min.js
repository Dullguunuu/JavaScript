let a = 120, b = 33, c = 10, d = 12;

if (a<b && a<c && a<d)
{
    console.log("Хамгийн бага утгатай нь:", a);
}

else if (b<a && b<c && b<d)
{
    console.log("Хамгийн бага утгатай нь:", b);
}

else if (c<a && c<b && c<d)
{
    console.log("Хамгийн бага утгатай нь:", c);
}

else
{
    console.log("Хамгийн бага утгатай нь:", d);
}
