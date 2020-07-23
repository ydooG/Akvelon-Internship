'use strict';

let user1 = {
    name: 'Mark',
};
console.log(user1.name); //Mark
let user1Ref = user1;
user1Ref.name = 'John';
console.log(user1.name); // John, name has changed

let user2 = {
    name: 'John',
};
console.log(user1 === user2);

user2 = user1;

console.log(user1 == user2);
console.log(user1 === user2);

let user1Copy = {};
for (let key in user1) {
    user1Copy[key] = user1[key];
}
user1Copy.name = 'Mark';
console.log(user1.name, user1Copy.name); // John Mark, not the same. user1Copy is a copy, not reference to user1

// another way to make a copy
let user1Copy2 = {};
Object.assign(user1Copy2, user1);
user1Copy2.name = 'Mark';
console.log(user1.name, user1Copy2.name); // John Mark

