
// Завдання 1 ----------------------------------------------------------------------------------------
// function fetchData() {
//     return new Promise((resolve, reject) => {

//       const Fdata = ("Дані завантажено");
//       setTimeout(() => resolve(Fdata), 1000);                   //работает??!?!??!?777
//     });
//   }

//   fetchData().then((data) => {
//     console.log(data); // Очікується: "Дані завантажено"
//   });
//   // Очікується: "Дані завантажено"

// Завдання 2 ----------------------------------------------------------------------------------------

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.7; 
//     setTimeout(() => (success ? resolve("Дані отримано") : reject("Помилка")), 500);
//   });
// }

// function retryFetch(fetchData, retries) 
// }

// retryFetch(fetchData, 3)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Не вдалося отримати дані:", err));


// завдання 3 ----------------------------------------------------------------------------------------

// const cart = [
//   { name: "Телефон", price: 700, quantity: 1 },
//   { name: "Ноутбук", price: 1500, quantity: 2 },
//   { name: "Мишка", price: 50, quantity: 3 },
// ];

// // Ваша функція
// function calculateTotal(cart) {
//   return cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);//accumulator - накопитель, item - текущий элемент, 0 - начальное значение, с которого начинается счет 
//                                                                                           //(acc, item) => acc + item.price * item.quantity - функция которая принимает два аргумента аккумулятор и айтем
// }

// console.log(calculateTotal(cart)); // Очікується: 3850 хз вроде работает

//  Завдання 4 ----------------------------------------------------------------------------------------
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = mergeObjects(obj1,  obj2);

console.log(merged); // Очікується: { a: 1, b: 3, c: 4 }
console.log(obj1);   // Очікується: { a: 1, b: 2 } (не має змінюватися)



