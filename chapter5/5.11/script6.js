'use strict';

//task6

const getSecondsToday = () => {
    let nowDate = new Date();

    let todayDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

    let different = nowDate - todayDate;
    return Math.round(different / 1000);
}

alert(getSecondsToday());
