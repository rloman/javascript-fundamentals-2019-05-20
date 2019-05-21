"use strict"

let numbers = [];

for (let i = 0; i <= 10; i++) {
    numbers[i] = i;
}

console.log(numbers.length);

numbers[20] = 20;

console.log(numbers.length);

let total = 0;

for (let i = 0; i < numbers.length; i++) {

   if(numbers[i]  != undefined) {
    total += numbers[i];
   }
}

console.log(total);