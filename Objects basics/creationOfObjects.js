'use strict';

// ways to create Object
let user1 = Object();
user1.age = 18;
user1.isMale = true;
user1.name = 'Mark';

let user2 = {};
user2.age = 18;
user2.isMale = true;
user2.name = 'Mark';

let user3 = {
    age: 18,
    isMale: true,
    name: 'Mark',
}

let user4 = {};
user4['age'] = 18;
user4['isMale'] = true;
user4['name'] = 'Mark';

// all prints the same data
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

// access to object's properties
console.log(user1.age)

let propertyName = 'surname';

let user5 = {
    age: 18,
    isMale: true,
    name: 'Mark',
    [propertyName]: 'Twain',
}

console.log(user5)
 let name = 'Mark';
let user6 = {
    age: 18,
    isMale: true,
    // same as name: name,
    name,
    [propertyName]: 'Twain',
}
console.log(user6);

console.log('age' in user1)

for (let key in user1) {
    console.log(key);
}

delete user6.name;
console.log(user6); // no name property anymore