'use strict';


//task2

const aclean = (arr) => {

    for (let elem of arr) {
        let sorted = elem.toLowerCase().split("").sort().join("");
        map.set(sorted, elem);
    }

    return Array.from(map.values());

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));
