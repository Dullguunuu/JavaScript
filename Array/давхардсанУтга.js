let array = [4, 2, 34, 4, 1, 1, 12, 1, 4];
let output = [];
let ii = 0;


//0 -> 4 
//1

for (let i = 0; i < array.length; i++) {

    let b = array[i];
    for (let j = i + 1; j < array.length; j++) {
        if (b === array[j]) {
            output.length++
        }
    }
}

console.log(output)

//index = 0

//length = 1