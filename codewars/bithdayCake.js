/* 
You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.
*/

function cake(x, y) {
   let sumEven = 0;
   let sumOdd = 0;
   for (let i = 0; i < y.length; i += 2) {
      sumEven += y[i].charCodeAt();
   }
   for (i = 1; i < y.length; i += 2) {
      sumOdd += y[i].charCodeAt() - 96;
   }
   const sum = sumEven + sumOdd;
   return sum > x * 70 / 100 ? 'Fire!' : 'That was close!';
}

console.log(cake(256, 'aaaaaddddr'));
console.log(cake(900, 'abcdef'));
