carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];

// 1

let input1 = prompt("Машины брэндийн эхний үсгээр хайх уу")

for (i = 0; i < carBrands.length; i++) {
    let arr = carBrands[i][0];
    if (arr[0] == input1) 
    {
        console.log("brand", carBrands[i][0])
        console.log("country", carBrands[i][1])
        console.log("year", carBrands[i][2])
    }
    else {
        console.log("олдсонгүй");
    }
}