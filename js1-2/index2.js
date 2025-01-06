// Получение данных от пользователя
const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const operator = prompt("Введите оператор (+, -, *, /):");

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/": 
            result = num1 / num2;
            break;
        default:
            return "Ошибка: неверный оператор!";
    }
    return result;
}
const result = calculate(num1, num2, operator);
alert("Результат: " + result);
