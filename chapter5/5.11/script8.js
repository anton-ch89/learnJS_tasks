'use strict';


//task8

const formatDate = (date) => {
    let different = new Date() - date;

    if (different < 1000) {
        return 'прямо сейчас';
    }

    let sec = Math.floor(different / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(different / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1)));

alert(formatDate(new Date(new Date - 30 * 1000)));

alert(formatDate(new Date(new Date - 5 * 60 * 1000)));

alert(formatDate(new Date(new Date - 86400 * 1000)));