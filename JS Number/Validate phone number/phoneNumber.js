let a = prompt("Та утасны дугаараа оруулна уу");
let phoneNumber = Number(a);

if ( Number.isInteger.phoneNumber && phoneNumber>0)
{
    if (a.substring(0, 4) == (+976))
    {
        if (a.length == 12)
        {
            console.log("Та Монгол улсын утасны дугаарыг зөв орууллаа");
        }
        else
        {
            console.log("Та утасны дугаараа буруу оруулсан байна");
        }
    }
    else{
        console.log("+976 тай дугаар оруулна уу");
    }
}
else
{
    console.log("Та тоо оруулна уу!");
}