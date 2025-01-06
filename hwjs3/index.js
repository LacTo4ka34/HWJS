

//задача 2-------------------------------------------

// const fruits = ['apple', 'banana', 'cherry', 'date', 'grape', 'bmw', 'audi', 'city']; //<- сущевствующий масив
// function choose(fruits) { //функция с названием choise которая берет данные с fruits
//     var index = Math.floor(Math.random() * fruits.length); //переменная которая создает каждой строке в массиве свой индекс
//     return fruits[index]; //присваивает индекс
// }
// console.log(choose(fruits));//выводит в консоль choose - это функция, fruits - массив и они типо пара

// //---------------------------------------------------

// //задача 1-------------------------------------------

// function RandColor() { //функция с назвниаем RandColor
//     const colors = Array.from({ length: 10 }, //переменная с названием colors которая через Array.from создает массив длиной { length: 10 } 10 строчек

//         function color() { //функция которая создает рандомное число которое умножаеться на 10000000 и через toString(16) превращаеться в 16ти ричную систему с буквами 

//             const color = Math.floor(Math.random() * 10000000).toString(16);

//             return "#" + color.padStart(6, "0"); //возвращает переменную color и с помощью padStart(6, "0"); ограничевает строку в 6 символов (нолик просто заполняющий символ) и подставляет "#" в начале
//         });
//     return colors; //просто возвращает массив 
// }

// const randomColors = RandColor(); //переменная с названием randomColors которой присваиваеться результат функции RandColor 
// console.log(randomColors); //выводит массив с 10 рандомными цветами в хэш формате

//---------------------------------------------------
// Завдання 3: Випадковий масив чисел
// function RandomNumber() {

//     const min = 3;
//     const max = 1000;

//     const numbers = Array.from({ length: 5 },() => {

//             return Math.random() * (max - min) + min;
//           });

//     return numbers;
// }

// console.log(RandomNumber());
//-----------------------------------------------------


function RandomNumber() { 

    const min = 1;  //миннимум число генерации
    const max = 100; //максимум число генерации

    const numbers = Array.from({ length: 5 },() => { //создание массива длиной 5 строк 

            return Math.random() * (max - min) + min; //функция генерирует рандомное число учитівая минимальное и максимальное значение 
          });

    return numbers; //хотел еще ограничить шо б 
}

console.log(Math.ceil(RandomNumber()));     //не понимаю почему віводит NaN??
console.log(Math.floor(RandomNumber()));//не понимаю почему віводит NaN??
console.log(Math.floor(RandomNumber()));//не понимаю почему віводит NaN??
console.log();

console.log(RandomNumber());//норм  

//----------------------------------------------------------
  
 

