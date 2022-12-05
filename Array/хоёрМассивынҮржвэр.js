const arr1 = [3, 45, 23, 78, 34],
    arr2 = [4, 2, 34, 4, 12, 1];
let arr3 = [];

for (i = 0; i < Math.max(arr2.length, arr1.length); i++) {
   arr1[arr1.length] = arr2[arr2.length-1]
   arr3[i] = arr1[i] * arr2[i]  
}

console.log (arr3)