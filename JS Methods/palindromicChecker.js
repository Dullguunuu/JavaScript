let n = prompt("Тоо оруулна уу");
let uildel1 = (n.split(""))
let uildel2 = uildel1.reverse()
let uildel3 = uildel2.join('')
console.log(uildel3)

if (n == uildel3)
    console.log("палиндром тоо мөн")

else {
    console.log("палиндром тоо биш")
}