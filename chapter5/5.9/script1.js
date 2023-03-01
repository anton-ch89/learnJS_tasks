'use strict';

//task1

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (obj) => {
    let arr = Object.values(obj)
    let sum = 0;
    for (let e of arr) {
        sum += e;
    }
    return sum;
}

alert(sumSalaries(salaries));

