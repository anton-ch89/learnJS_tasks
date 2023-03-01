'use strict';



const sumInput = () => {
    let arr = []

    while (true) {
        let num = prompt('Введите число')

        if (num === '' || num === null || !isFinite(num)) break;

        arr.push(+num)
    };

    let sum = 0;

    arr.forEach(e => sum += e);

    return sum;
}


sumInput()




