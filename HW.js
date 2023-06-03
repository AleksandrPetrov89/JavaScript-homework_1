let randomNumber = Math.floor(Math.random() * 1000);
console.log(randomNumber);
while (true) {
    let userNumber = prompt("Введите число от 0 до 999:")
    /* Дополнительный выход из цикла */
    if (userNumber === "q") { // + себе памятка и тренировка
        break;
    };
    userNumber = +userNumber;
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 999) {
        alert("Вы ошиблись при вводе!");
    } else if (randomNumber === userNumber) {
        alert("Вы угадали! Поздравляю!");
        break;
    } else if (randomNumber < userNumber) {
        alert("Загаданное число меньше, чем Вы предположили!");
    } else if (randomNumber > userNumber) {
        alert("Загаданное число больше, чем Вы предположили!");
    } else console.log("Какая-то непонятная ошибка!!!");
};
