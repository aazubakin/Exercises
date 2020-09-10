function calculate(num1, num2, callbackFunction) {
   return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
   return num1 * num2;
}

function calcSum(num1, num2) {
   return num1 + num2;
}
// alerts 75, the product of 5 and 15
console.log(calculate(5, 15, calcProduct));
// alerts 20, the sum of 5 and 15
console.log(calculate(5, 15, calcSum));
//------------------------------------------------------------------------
function processArray(arr, callback) {
   // TODO
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
   }
   return result;
}

function myfunc(arr) {
   return arr + 2;
}
console.log(processArray([1, 2, 3, 4, 5], myfunc));