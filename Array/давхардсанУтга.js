let array = [4, 2, 34, 4, 1, 1, 12, 1, 4];
let output = [];
let ii = 0;


//0 -> 4 
//1

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            output
            break;
        }
    }
}

console.log(output)
