let Ateam, Bteam, average;

Ateam = (196+108+89)/3;  
Bteam = (288+91+110)/3;   

if (Ateam>100 && Bteam>100){
if (Ateam>Bteam)
{
    console.log("А баг түрүүлсэн");
}

else if (Ateam<Bteam)
{
    console.log("Б баг түрүүлсэн");
}

else
{
    console.log("Багууд тэнцсэн");
}
}

else
{
    console.log("Ялагч байхгүй");
}


