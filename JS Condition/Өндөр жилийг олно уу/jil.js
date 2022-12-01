let jil=1504 , a = jil%4, b=jil%100, c=jil%400;

if (a==0 && c==0)
{
    if (b==0)
    console.log("Өндөр жил биш");

    else
    {
        console.log("Өндөр жил мөн")
    }
    
}

else if (a==0)
{
    if (b==0)
    console.log("Өндөр жил биш");

    else{
        console.log("Өндөр жил мөн")
    }
    
}

else
{
    console.log("Өндөр жил биш");
}