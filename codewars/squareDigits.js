function squareDigits(num) {
   //may the code be with you
   let arr = String(num).split('');
   arr = arr.map(elem => elem *= elem);
   return arr.join('');
}

console.log(squareDigits('9119'));