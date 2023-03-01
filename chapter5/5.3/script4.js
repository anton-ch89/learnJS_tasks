'use strict';

//task4


const extractCurrencyValue = (str) => {
    return + str.slice(1)
}

alert(extractCurrencyValue('$120') === 120);