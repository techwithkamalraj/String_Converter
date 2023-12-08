// 1.forEach
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num)=> console.log(num));

//2. map

// const squares = [1, 4, 9, 16, 25];

// let squareRoots = squares.map((num) => {
//     return(Math.sqrt(num));
// });

// console.log(squareRoots);

//3. filter

// const ages = [25, 18, 30, 22, 35, 40];

// let eligibleForVote = ages.filter((age)=>{
//     return age >= 18 ;
// });

// console.log(eligibleForVote);


//4. reduce

// const prices = [20.5, 15.75, 32.9, 10.25, 50.0];

// let total = prices.reduce((acc,price)=>{
//      return acc + price;
// },0)

// console.log(total);

// // 5. Chaining 

// const products = [
//     { name: 'Laptop', price: 1200, quantity: 3 },
//     { name: 'Mouse', price: 25, quantity: 5 },
//     { name: 'Monitor', price: 300, quantity: 2 },
//     { name: 'Keyboard', price: 50, quantity: 4 },
// ];
  
// let discountedPrices = products.map((product)=> product.price * product.quantity)
// .filter((product)=> product < 500)
// .reduce((acc,product)=> {
//     return acc + product * 10/100
// },0)


// console.log(discountedPrices);


let arr = [2,3,5];
console.log(arr.at(2));

// console.log(arr.find((a)=>{
//      retu 3
// }));




