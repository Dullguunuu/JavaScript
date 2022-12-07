const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 

itCompanies.sort()
console.log(itCompanies);

// 

console.log(itCompanies.reverse());

// 

let task3 = itCompanies.shift();
console.log(itCompanies);

// 


let task4 = itCompanies.splice((itCompanies.length - 1) / 2, 1)
console.log(itCompanies)

// 

let task5 = itCompanies.pop()
console.log(itCompanies);

// 

let task6 = itCompanies.splice(itCompanies[0], itCompanies.length)
console.log(itCompanies)