'use strict';

//task3

const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];

        if (elem < a || elem > b) {
            arr.splice(i, 1);
            i--;
        };
    };
};
