// Гараас огноо, сар, өдөр гэсэн утгуудыг аван дараах форматын дагуу
// харуулна уу. Жишээ 2009, 12, 31 гэж орж ирвэл “2009-12-31”. Анхаарах зүйл хэрвээ өдөр,
//  сар нэг оронтой байвал 2 оронтой болгох буюу сар нь  1 гэж байвал “01” болгох, гараас оруулж байгаа утгыг шалгах

let year = prompt("Та жил оруулна уу");
let month = prompt("Та сар оруулна уу");
let day = prompt("Та өдөр оруулна уу");

let yearNumber = Number(year);
let monthNumber = Number(month);
let dayNumber = Number(day);

if (Number.isInteger(yearNumber) && yearNumber > 0) {
  if (Number.isInteger(monthNumber) && monthNumber > 0) {
    if (Number.isInteger(dayNumber) && dayNumber > 0) {
      if (year.length == 4) {
        // if (month.length < 2) {
        month = month.length == 1 ? "0" + month : month;
        day = day.length == 1 ? "0" + day : day;

        let result = year + "-" + month + "-" + day;

        alert(result);
      } else {
        alert("Та jilee zuv оруулна уу");
      }
    } else {
      alert("Та udruu buhel too оруулна уу");
    }
  } else {
    alert("Та saraa buhel too оруулна уу");
  }
} else {
  alert("Та ognoogoo buhel too оруулна уу");
}
