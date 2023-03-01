'use strict';



const randomInteger = (min, max) => {
    let randomNum = Math.random() * (max + 1 - min) + min;
    return Math.floor(randomNum);
};

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));