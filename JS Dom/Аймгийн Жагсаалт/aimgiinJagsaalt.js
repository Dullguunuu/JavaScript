//  1

console.log(document.getElementById("aimag-101").innerHTML);

//  2

let a = document.getElementsByTagName("li");
console.log(a[a.length - 1].innerHTML)

//  3

console.log(document.getElementById("aimag-315").innerHTML);

//  4

console.log(document.getElementById("aimag-202").style.color = "blue");

let style = document.getElementsByTagName("li");

for (i = 0; i < style.length; i++) {
    style[i].style.color = "red"
    style[i].style.fontSize = "30px"
    style[i].style.margin = "20px"
    style[i].style.padding = "20px"
    style[i].style.border = "2px solid black"
    style[i].style.border = "2px dotted red"
    console.log(style)
}

//  5

let task5 = document.getElementsByTagName('li')

for (i = 0; i < task5.length; i++) {
    if (task5[i].id[6] == 1) {
        task5[i].style.backgroundColor = "beige"
    }
    if (task5[i].id[6] == 2) {
        task5[i].style.backgroundColor = "blue"
    }
    if (task5[i].id[6] == 3) {
        task5[i].style.backgroundColor = "pink"
    }
    if (task5[i].id[6] == 4) {
        task5[i].style.backgroundColor = "purple"
    }
    if (task5[i].id[6] == 5) {
        task5[i].style.backgroundColor = "red"
        task5[i].style.color = "black"
    }
}
console.log(task5);


