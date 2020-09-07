function mygcd(x, y) {
   let temp = [];
   let result = [];
   if (x >= y) {
      for (let i = 2; i <= y; i++) {
         while (y % i === 0) {
            temp.push(i);
            y = y / i;
         }
      }
      for (i = 2; i <= x; i++) {
         while (x % i === 0) {
            if (temp.includes(i)) result.push(i);
            x = x / i;
         }
      }

   } else {
      for (i = 2; i <= x; i++) {
         while (x % i === 0) {
            temp.push(i);
            x = x / i;
         }
      }
      for (i = 2; i <= y; i++) {
         while (y % i === 0) {
            if (temp.includes(i)) result.push(i);
            y = y / i;
         }
      }
   }

   console.log(result);
   return result.length === 0 ? 1 : result.reduce((acc, element) => acc * element);
}

console.log(mygcd(30, 12));
console.log(mygcd(8, 9));
console.log(mygcd(60, 12));
console.log(mygcd(2672, 5678));
console.log(mygcd(1590771464, 1590771620));
console.log(mygcd(10927782, 6902514));