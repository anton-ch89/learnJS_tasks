'use strict';



//task5

const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
};

