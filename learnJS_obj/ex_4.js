/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
*/

// до вызова функции
let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};

const multiplyNumeric = (menu) => {
   for (let i in menu) {
      //console.log(menu[i]);
      if (Number.isInteger(menu[i])) {
         menu[i] *= 2;
      }
   }
};
multiplyNumeric(menu);
console.log(menu);