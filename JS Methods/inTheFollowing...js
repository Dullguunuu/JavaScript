const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// 

let task1 = shoppingCart.unshift('Meat')
console.log(shoppingCart)

// 

let task2 = shoppingCart.push('Sugar')
console.log(shoppingCart);

// 

let task3 = shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log(shoppingCart)

// 

let task4 = shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
console.log(shoppingCart);