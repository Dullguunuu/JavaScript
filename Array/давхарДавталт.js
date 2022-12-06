// 1

let input = 5;
let string = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

// 2

let n = 5;
let example = "";
for (let ii = 1; ii <= n; ii++) {
  for (let jj = 1; jj <= n - ii + 1; jj++) {
    example += n - jj + 1;
  }
  example += "\n";
}
console.log(example);