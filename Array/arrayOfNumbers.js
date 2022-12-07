const arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

// Array доторх тоонуудын нийлбэр

let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++)
{
    sum += arrayOfNumbers[i];
}

console.log(sum)

//  Хамгийн их тоо

let max = 0;
for (let i = 0; i < arrayOfNumbers.length; i++){
    max = Math.max(max, arrayOfNumbers[i]) 
}
console.log(max); 

    
// Хамгийн бага тоо

for (let i = 0; i < arrayOfNumbers.length; i++){
    min = Math.min(arrayOfNumbers[i])
}
console.log(min); 

//  Array - ийн эхэнд дурын 1 тоог нэм

arrayOfNumbers.unshift(1234)
console.log(arrayOfNumbers)

// Array - ийн төгсгөлд дурын 1 тоог нэм


const forPush = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
forPush.push(5678)
console.log(forPush)