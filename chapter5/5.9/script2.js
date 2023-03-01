'use strict';

//task2

let user = {
    name: 'John',
    age: 30
};

const count = (obj) => {
    return Object.values(obj).length
}

alert(count(user));

