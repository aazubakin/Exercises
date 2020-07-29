/*
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
}

const salary = (obj) => {
   let sum = 0;
   for (let i in obj) {
      sum += obj[i];
      //console.log(obj[i]);
   }
   return sum;
};

console.log(salary(salaries));