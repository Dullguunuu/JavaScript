let number = prompt ("Та регистрийн дугаараа оруулна уу");

if (number.length == 10)
{
    if (number.substring(0,2) != Number(number.substring(0,2)))
    {
        number.substring(2, 10) == Number(number.substring(2, 10)) ? console.log("Та монгол улсын регистрийн дугаарыг зөв орууллаа") : console.log("Регистрийн сүүлийн 8 орон тоо байхыг анхаарна уу");
    }
    else 
        {
            console.log("Регистрийн эхний 2 орон үсэг байхыг анхаарна уу");
        }
}
else
{
    console.log("Та регистрийн дугаараа зөв оруулсан эсэхээ шалгана уу");
}


// number.length == 10 ?     : console.log("Та регистрийн дугаараа зөв оруулсан эсэхээ шалгана уу");
// number.substring(0,2) != Number(number.substring(0,2)) ?           : console.log("Регистрийн эхний 2 орон үсэг байхыг анхаарна уу");
// number.substring(2, 10) == Number(number.substring(2, 10)) ? console.log("Та монгол улсын регистрийн дугаарыг зөв орууллаа") : console.log("Регистрийн сүүлийн 8 орон тоо байхыг анхаарна уу");


