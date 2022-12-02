/* Гараас утасны дугаар(99001234) аван шалгах, 
зөв дугаар бол харгалзах операторыг(Unitel, Mobicom, G - Mobile, Skytel) 
хэвлэх, буруу дугаар бол буруу гэсэн мессежийг өгөх */

let phone = prompt ("Та утасны дугаар оруулна уу");

if (phone.length == 8 && Number(phone))
{
    if(phone.substr(0, 2) == 80 || phone.substr(0,2)== 86 || phone.substr(0,2)== 88 || phone.substr(0,2)== 89)
    console.log(phone, "Unitel-н дугаар байна")
    if(phone.substr(0, 2) == 85 || phone.substr(0,2)== 99 || phone.substr(0,2)== 95 || phone.substr(0,2)== 94)
    console.log(phone, "Mobicom-н дугаар байна")
    if(phone.substr(0, 2) == 83 || phone.substr(0,2)== 93 || phone.substr(0,2)== 97 || phone.substr(0,2)== 98)
    console.log(phone, "Gmobile-н дугаар байна")
    if(phone.substr(0, 2) == 90 || phone.substr(0,2)== 91 || phone.substr(0,2)== 96)
    console.log(phone, "Skytel-н дугаар байна")
    if(phone.substr(0, 2) == 60 || phone.substr(0,2)== 66)
    console.log(phone, "Ondo-н дугаар байна")
}
else 
{
    console.log("Буруу дугаар");
}

// G mobile 83 93 97 98
// uni 80 86 88 89 
// mobi 85 99 95 94
// sky 90 91 96
// ondo 60 66