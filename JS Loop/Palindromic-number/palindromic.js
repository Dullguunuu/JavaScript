let str = "1234321";
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
    console.log(str, "is not palindrome");
}

else {
    console.log(str, "is palindrome");
}

