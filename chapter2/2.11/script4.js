'use strict';

let user = prompt("Кто там?")
if (user === "Админ") {
    let pass = prompt("Введите пароль")
    if (pass === "Я Главный") {
        alert("Здравствуйте!")
    }
    else if (pass === null) {
        alert("Отменено")
    }
    else { alert("Неверный пароль") }
}
else if (user === null) {
    alert("Отменено")
}
else { alert("Я Вас не знаю") }
