const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 1

console.log(itCompanies.slice(0, 3));

// 2

console.log(itCompanies.slice(-3));

// 3

console.log(itCompanies.slice(Math.floor(itCompanies.length/2), Math.ceil(itCompanies.length/2)))

// 4

const shifted = itCompanies;
shifted.shift();
console.log(shifted);

// 5 

const popped = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// const popped = itCompanies;
popped.pop();
console.log(popped);

