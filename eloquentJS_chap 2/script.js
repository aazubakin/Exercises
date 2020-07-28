'use strict'

// find minimum
const min = (x, y) => {
   if (x < y) {
      return x;
   }
   else return y;
}

console.log(min(2, 3));

//define whether a positive whole number is even or odd by recursion
const isEven = (n) => {

   if (n == 0) return true;
   else if (n == 1) return false;
   else if (n < 0) return n = isEven(n + 2); // in way negative number
   else return n = isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//how many uppercase “B” characters there are in the string.
const countBs = (str) => {
   let counter = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] == "B") counter++;
   }
   return counter;
}
console.log(countBs("BBC"));
// → 2

//how many times repeat specific letter in the string
const countChar = (str, ch) => {
   let counter = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] == ch) counter++;
   }
   return counter;
}
console.log(countChar("kakkerlak", "k"));
// → 4