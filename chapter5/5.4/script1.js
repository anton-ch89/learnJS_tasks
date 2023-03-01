'use strict';

//task2

let styles = ['Джаз', 'Блюз',];

styles.push('Рок-н-ролл');

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';

let first = styles.shift(0);
alert(first)
styles.unshift('Рэп', 'Регги ')

