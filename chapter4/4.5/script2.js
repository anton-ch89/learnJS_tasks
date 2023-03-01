"use strict";

//task1

let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log(a == b);

//task2


function Calculator() {

    this.read = function () {
        this.x = + prompt("Введите первое число")
        this.y = + prompt("Введите второе число")
    }
    this.sum = function () {
        return this.x + this.y
    }
    this.mul = function () {
        return this.x * this.y
    }

}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


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