"use strict";



//task4

let multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'number') obj[key] *= 2
    };
};

