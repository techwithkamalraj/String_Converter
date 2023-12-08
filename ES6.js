// 1. Write a function to calculate
// the factorial of a given number.

// function calfactorial(number){
//    if(number < 0){
//     console.log(`${number} : Negative Number aren't allowed`);
//    }
//    else if(number == 0 || number === 1){
//     return 1;
//    }
//    else{
//     let factorial = 1;
//     for(let i = 2;i<= number;i++){
//         factorial = factorial * i
//     }
//     return factorial;
//    }
// }
// let number = 5
// let result = calfactorial(number);
// console.log(result);

// 2. Create 
// a function that reverses a given string.

// function revString(str){
//     let reverse = "";
//     for(let i = str.length - 1;i >= 0;i--){
//        reverse += str[i]
//     }
//     return reverse;
// }

// let revstr = revString("Kamalraj");
// console.log(revstr);


// 3. Write a function that finds the maximum
//  element in an array of numbers.


// function maxArray(arr){
//     if(arr.length == 0){
//         console.log(`${arr} is empty`);
//     }

//     let max  = arr[0];

//     for(let i = 1;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max;
// }


// console.log(maxArray([23,10,4,12,5]));


// 4. Given an object, write a function to print 
// all keys and their corresponding values



// let myDetails = {
//     firstName: 'Kamalraj',
//     lastName: 'Chitturi',
//     age: 22,
//     isCoder: true,
//     address: {
//         Town: 'Khopoli',
//         city: 'Mumbai',
//         state: 'Maharashtra'
//     },
//     hobbies: ['Fitness','Reading']
// }

// console.log(Object.values(myDetails));



// 5. Write a function that prints numbers from 1 to 100.
// For multiples of 3, print "Fizz", for multiples of 5,
// print "Buzz", and for numbers that are multiples
// of both 3 and 5, print "FizzBuzz".


// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();


// 6. Write a function that takes an array of numbers 
// as input and returns a new array containing only the even numbers from the original array.

// function filterArray(arr){
//     let evenAray =  arr.filter((ele)=>{
//        return ele % 2 == 0;;
//      })
//     return evenAray;
// }

// console.log(filterArray([1,2,3,4,5,67,8]));


// 7. Create a function that takes an array of objects with a numeric 
// property and sorts them based on that property in ascending order.
//  For example, if the input is [{num: 5}, {num: 2}, {num: 8}],
//  the function should return [{num: 2}, {num: 5}, {num: 8}]


function ascendingSort(arr){
    if(arr[0])
}

console.log(ascendingSort([{num: 5},{num: 2},{num: 8}]));
