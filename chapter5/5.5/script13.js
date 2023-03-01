'use strict';



//task13

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

const groupById = (arr) => {
    return arr.reduce((obj, val) => {
        obj[val.id] = val;
        return obj;
    }, {})
}

let usersById = groupById(users);
console.log(usersById);
