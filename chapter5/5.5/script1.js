'use strict';

//task1

const camelize = (str) => {
    return str.split('-')
        .map((e, i) => {
            if (i == 0) {
                return e
            } else {
                return e[0].toUpperCase() + e.slice(1)
            }
        })
        .join('');
}

