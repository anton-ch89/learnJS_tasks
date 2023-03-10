'use strict';


const getMaxSubSum = (arr) => {
    let sum = 0;
    let maxSum = 0;

    for (let elem of arr) {
        sum += elem;
        maxSum = Math.max(maxSum, sum)

        if (sum < 0) sum = 0
    }
    return maxSum;
}

