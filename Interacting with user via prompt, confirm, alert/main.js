'use strict';

let messageText = 'Enter your name';
let userName = prompt(messageText, 'Default');
let isMale = confirm('Are you a male?')
console.log(userName);
let headerElement = document.getElementById('name');
let text;
text = isMale? `Hello, man ${userName}!`: `Hello, woman ${userName}`;
headerElement.innerText = text;

