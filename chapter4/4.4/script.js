"use strict";

//task2

let calculator = {
    read() {
        this.x = + prompt('Введите первое число')
        this.y = + prompt('Введите второе число')
    },
    sum() {
        return this.x + this.y
    },
    mul() {
        return this.x * this.y
    },
}
