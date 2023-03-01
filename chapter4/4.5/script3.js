"use strict";



//task3


function Accumulator(stringValue) {
    this.value = stringValue;
    this.read = function () {
        this.value += + prompt("Введите число")
    }

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value); 