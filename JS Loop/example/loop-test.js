// ugugdsun too - 123 => 321 bolgon haruulah

let num = 678876,
  temp = 0,
  last = 0,
  rem = 0;

temp = num;

while (num > 0) {
  rem = num % 10;
  num = Math.floor(num / 10);
  last = last * 10 + rem;
}

if (temp == last) {
  console.log("palindrome");
}
console.log("num", num);
console.log("last", last);

let i = 0;
let sum = 0;
while (i < 5) {
  console.log("i", i);
  sum += i;
  console.log("sum1", sum);
  i++;
}
console.log("sum", sum);

let star = "";
for (let x = 0; x <= 6; x++) {
  for (let y = 0; y <= 6; y++) {
    star += "*";
  }
  star += "\n";
}
console.log(star.length);
console.log(star);

//left-side gurwaljin hiie
i = 0;
star = "*";

while (i <= 5) {
  console.log(star + "\n");
  star += "*";
  i++;
}

star = "";
for (let x = 0; x <= 5; x++) {
  for (let y = 0; y <= x; y++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

star = "";

for (let x = 0; x <= 5; x++) {
  for (let y = 0; y <= 5; y++) {
    // star += "*";
    if (x == 0 || x == 5) {
      star += "*";
    } else {
      //x = 1
      if (y == 0 || y == 2 || y == 5) {
        star += "*";
      } else {
        star += " ";
      }
    }
  }

  star += "\n";
}
console.log(star);

string = "This is javascript, javascript is very hard";
let searchStr = "is";
console.log(string);
let count = 0;

for (let i = 0; i <= string.length; i++) {
  let pattern = string[i] + string[i + 1];
  //Th
  if (pattern == searchStr) {
    count++;
    console.log(
      ` Таны хайсан ${searchStr} нь ${i} байршлаас эхлээд ${
        i + 1
      } энд дуусаж байна `
    );
  }
}

console.log("Нийт " + count);

// string.indexOf(searchStr);
console.log(string.indexOf(searchStr));

let aStr = string.indexOf(searchStr);

console.log("dd", string.indexOf(searchStr, aStr + 1));

let menu =
  "Та дараас цэснээс утга сонгоно\n" +
  "1 ----------  Нэвтрэх \n" +
  "2 ----------  Мэдээ\n";

let menu1 =
  "Та дараас цэснээс утга сонгоно\n" +
  "1 ----------  Жагсаалт \n" +
  "2 ----------  Гарах\n";

let num1 = prompt(menu);

switch (num1) {
  case "1":
    let username = prompt("tanii nevtreh neree oruulna uu");

    if (username.length >= 2 && username.indexOf("@") == -1) {
      //jdjd
      let pass = prompt("tanii nevtreh nuuts ugee oruulna uu");
      if (pass.length >= 6 && pass.indexOf("@") == -1) {
        let name = "Oyuka";
        let password = "qweqwe";

        if (username.toLowerCase() == name.toLowerCase() && pass == password) {
          alert("Amjilttai nevterlee");
          let m = prompt(menu1);

          switch (m) {
            case "2":
              let isConfirm = confirm("Ta garahdaa itgeltei bna uu");
              if (isConfirm) {
                alert("Amjilttai garlaa");
              } else {
                prompt(menu1);
              }

              break;
            default:
              alert("Buruu utga bna");
              break;
          }
        } else {
          alert("Tanii nuuts ug eswel nevtreh ner buruu bna");
        }
      } else {
        alert(
          "Tanii oruulsan nuuts ug temdegtiin urt 6 bolon tuunees deesh bh yostoi, mun tusgai temdeg aguulaagui bh yostoi"
        );
      }
    } else {
      alert(
        "oruulsan utganii temdegtiin urt 2 bolon tuunees deesh bh yostoi, mun tusgai temdeg aguulaagui bh yostoi"
      );
    }

    break;
  case "2":
    break;
  default:
    alert("Garaas orj irsen utga buruu bna");
    break;
}
