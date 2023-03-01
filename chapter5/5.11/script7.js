'use strict';


//task 7

function getSecondsToTomorrow() {
    let nowDate = new Date();


    let tomorrowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);

    let different = tomorrowDate - nowDate;
    return Math.round(different / 1000);
};
