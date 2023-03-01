'use strict';


//task5

let arr = ["HTML", "JavaScript", "CSS"];


const copySorted = (arr) => {
    // let newArr = [...arr];
    // return newArr.sort()

    return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(sorted);
alert(arr);
