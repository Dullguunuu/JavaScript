const data = [
    { productName: "Bakery", unitPrice: 5000, amount: 200, totalPrice: 1000000 , casherId: 1, date: '2022-11-01' },
    { productName: "Chocolate", unitPrice: 3000, amount: 18, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Apple", unitPrice: 10000, amount: 40, totalPrice: 400000 , casherId: 1, date: '2022-11-01' },
    { productName: "Champagne", unitPrice: 30000, amount: 10, totalPrice: 300000, casherId: 1, date: '2022-11-01' },
    { productName: "Banana", unitPrice: 8000, amount: 20, totalPrice: 160000 , casherId: 1, date: '2022-11-01' },
    { productName: "Bread", unitPrice: 3300, amount: 30, totalPrice: 99000, casherId: 1, date: '2022-11-01' },
    { productName: "Croissant", unitPrice: 6000, amount: 10, totalPrice: 60000 , casherId: 1, date: '2022-11-01' },
    { productName: "Meat", unitPrice: 18000, amount: 20, totalPrice: 360000, casherId: 1, date: '2022-11-01' },
    { productName: "Pickle", unitPrice: 8500, amount: 15 , totalPrice: 127500 , casherId: 1, date: '2022-11-01' },
    { productName: "Cookies", unitPrice: 7000, amount: 8, totalPrice: 56000, casherId: 1, date: '2022-11-01' },
    { productName: "Rice", unitPrice: 6000, amount: 50, totalPrice: 300000 , casherId: 1, date: '2022-11-01' },
    { productName: "Chicken", unitPrice: 30000, amount: 20, totalPrice: 600000, casherId: 1, date: '2022-11-01' },
    { productName: "Kimchi", unitPrice: 6000, amount: 5, totalPrice: 30000 , casherId: 1, date: '2022-11-01' },
    { productName: "Granola Bar", unitPrice: 3000, amount: 10, totalPrice: 30000, casherId: 1, date: '2022-11-01' },
    { productName: "Flour", unitPrice: 2200, amount: 10, totalPrice: 220000 , casherId: 1, date: '2022-11-01' },
    { productName: "Salt", unitPrice: 9000, amount: 5, totalPrice: 45000, casherId: 1, date: '2022-11-01' },
    { productName: "Frozen Pizza", unitPrice: 15000, amount: 4, totalPrice: 45000 , casherId: 1, date: '2022-11-01' },
    { productName: "Cheese", unitPrice: 35000, amount: 2, totalPrice: 70000, casherId: 1, date: '2022-11-01' },
    { productName: "Cottage Cream", unitPrice: 13000, amount: 8, totalPrice: 104000 , casherId: 1, date: '2022-11-01' },
    { productName: "Milk", unitPrice: 3800, amount: 20, totalPrice: 76000, casherId: 1, date: '2022-11-01' },
    { productName: "Gum", unitPrice: 3000, amount: 5, totalPrice: 15000 , casherId: 1, date: '2022-11-01' },
    { productName: "Butter", unitPrice: 10000, amount: 10, totalPrice: 10000, casherId: 1, date: '2022-11-01' },
    { productName: "Oatmeal", unitPrice: 15000, amount: 3, totalPrice: 45000 , casherId: 1, date: '2022-11-01' },
    { productName: "Lollipop", unitPrice: 300, amount: 10, totalPrice: 3000, casherId: 1, date: '2022-11-01' },
    { productName: "Icecream", unitPrice: 2000, amount: 30, totalPrice: 60000 , casherId: 1, date: '2022-11-01' },
    { productName: "Chips", unitPrice: 9000, amount: 8, totalPrice: 72000, casherId: 1, date: '2022-11-01' },
    { productName: "Avocado", unitPrice: 4500, amount: 20, totalPrice: 90000 , casherId: 1, date: '2022-11-01' },
    { productName: "Tangerine", unitPrice: 9000, amount: 20, totalPrice: 180000, casherId: 1, date: '2022-11-01' },
    { productName: "Sausage", unitPrice: 2000, amount: 50, totalPrice: 100000 , casherId: 1, date: '2022-11-01' },
    { productName: "Egg", unitPrice: 600, amount: 600, totalPrice: 360000, casherId: 1, date: '2022-11-01' }
]

//  1

console.log("Нийт борлуулалтын дүн:");

let Total = 0;
for (i = 0; i < data.length; i++)
{
    Total += data[i].totalPrice;
}
console.log(Total);



//  2

let totalSales = 0;
for (i = 0; i < data.length; i++)
{
    totalSales += data[i].amount;
}
console.log("Нийт борлуулагдсан барааны тоо:", totalSales);


//  3

console.log("Хамгийн их зарагдсан 5 барааны жагсаалт /борлуулалтын үнийн дүнгээр/") 
console.log(data.sort((a, b) => a.totalPrice - b.totalPrice).slice(data.length-5))


//  4

console.log("Хамгийн их зарагдсан 5 барааны жагсаалт /борлуулалтын тоо хэмжээгэр/")
console.log(data.sort((a, b) => a.amount - b.amount).slice(data.length-5));


//  5

console.log("Хамгийн бага зарагдсан 5 барааны жагсаалт /борлуулалтын үнийн дүнгээр/") 
console.log(data.sort((a, b) => a.totalPrice - b.totalPrice).slice(0,5))



//  6

console.log("Хамгийн бага зарагдсан 5 барааны жагсаалт /борлуулалтын тоо хэмжээгээр/");
console.log(data.sort((a, b) => a.amount - b.amount).slice(0,5))


//  7

console.log("Хамгийн их зарагдсан /борлуулалтын үнийн дүнгээр/ 10 барааны борлуулалтын үнийн дүнгийн нийт борлуулалтанд эзлэх хувь ");

let huvi1 = 0;
let max_amounts = data.sort((a, b) => a.totalPrice - b.totalPrice).slice(data.length-10)

for (i = 0; i <10; i++)
{
    huvi1= (max_amounts[i].totalPrice*100)/Total;
    console.log(max_amounts[i].productName, huvi1.toFixed(1) + "%");
}


//  8

console.log("Хамгийн их зарагдсан /борлуулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь");
let huvi2 = 0;
let max_sales = data.sort((a, b) => a.amount - b.amount).slice(data.length-5);

for (i = 0; i <5; i++)
{
    huvi2 = (max_sales[i].amount*100)/totalSales;
    console.log(max_sales[i].productName, huvi2.toFixed(1) + "%");
}

//  9

console.log("Хамгийн бага зарагдсан /борлуулалтын үнийн дүнгээр/ 5 барааны борлуулалтын үнийн дүнгийн нийт борлуулалтанд эзлэх хувь");


let huvi3 = 0;
let min_amounts= data.sort((a, b) => a.totalPrice - b.totalPrice).slice(0,5);

for (i = 0; i <5; i++)
{
    huvi3= (min_amounts[i].totalPrice*100)/Total;
    console.log(min_amounts[i].productName, huvi3.toFixed(1) + "%");
}


//  10 

console.log("Хамгийн бага зарагдсан /борлуулалтын тоо хэмжээгээр/ 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь");

let huvi4 = 0;
let min_sales = data.sort((a, b) => a.amount - b.amount).slice(0,5);

for (i = 0; i <5; i++)
{
    huvi4 = (min_sales[i].amount*100)/totalSales;
    console.log(min_sales[i].productName, huvi4.toFixed(1) + "%");
}



