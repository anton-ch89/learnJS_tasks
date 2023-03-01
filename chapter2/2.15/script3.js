'use strict';




function pow(x, n) {
    return x ** n
}
let x = +prompt("Введите число")
let n = +prompt("Введите степень")

if (n < 1) {
    alert('Нельзя использовать не натуральное число')
} else {
    alert(pow(x, n))
}


