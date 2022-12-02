// 1-ees 200 hoorond bh buh tegsh toog oliyo

// let count = 1;
// let result = "";

// while (count <= 200) {
//   if (count % 2 == 0) {
//     result += count + " ";
//   }
//   count++;
// }
// console.log(result);

//567930 энэ тооны хамгийн их цифрийг хэвлэнэ үү.

let utga = "216181";
let max = utga.length > 0 ? utga[0] : 0;
let i = 0;
let min = utga[0];

while (i < utga.length) {
  if (max < utga[i]) {
    max = utga[i];
  }
  i++;
}

// min - oloh
let y = 0;
while (y < utga.length) {
  if (min > utga[y]) {
    min = utga[y];
  }
  y++;
}

console.log(min);

//JKAKJ - palindrome

let str = "313";
let a = 0;
let len = str.length;
let res = false;

while (a <= len / 2) {
  if (str[a] != str[len - 1 - a]) {
    res = true;
  }

  a++;
}

if (res) {
  console.log("it is not palindrome");
} else {
  console.log("it is palindrome");
}
