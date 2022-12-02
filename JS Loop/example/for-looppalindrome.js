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
