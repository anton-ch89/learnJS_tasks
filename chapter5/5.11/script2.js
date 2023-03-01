'use strict';


//task2
let date = new Date(2012, 0, 3);

const getWeekDay = (date) => {
    let day = date.getDay();
    let arr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];
    return arr[day]
}

alert(getWeekDay(date));

