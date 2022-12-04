let n = 12345,
nToo = n,
urvuu = 0,
uldegdel = 0;

while (n > 0) {
  reminder = n % 10;
  n = Math.floor(n / 10);
  urvuu = urvuu * 10 + reminder;
}

console.log("n too", nToo);
console.log("urvuu too", urvuu);
