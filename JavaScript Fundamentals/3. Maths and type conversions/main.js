'use strict';

let num1 = 12;
let str1 = 'hello';
let result = num1 + str1;
console.log(result); // "12hello" concatenation

let str2 = '4';
result = num1 + str2;
console.log(result); // "124" concatenation

result = num1 - str2;
console.log(result); // "8" arithmetics

result = num1 + +str2;
console.log(result);  // "16" arithmetics

result = +str2 + num1;
console.log(result); // "16" arithmetics

result = +num1 + +str2;
console.log(result); // "16" arithmetics

console.log(typeof str1); // "string"

console.log(Number(str1)); // "NaN"
console.log(typeof Number(str1)); // ""number wtf???

console.log(typeof Number(str2)); // "number"
console.log(typeof String(num1)); // "string"

function sayYes() {
    alert('Yes');
}

alert(sayYes);


