// function declaration
function sayHello1() {
    console.log('Hello!');
}

//function expression
let sayHello2 = function () {
    console.log('Hello!');
}

//arrow function
let sayHello3 = () => console.log('Hello!');

// multiline arrow function
let sayHello4 = () => {
    let text = 'Hello!';
    console.log(text);
}

// All of them do the same thing: 'Hello!'
sayHello1();
sayHello2();
sayHello3();
sayHello4();