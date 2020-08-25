function transform(line) {
   const arrLine = line.split(' ');
   function checkTransform(str1, str2) {
      let obj = new Set();
      const arr = [];
      for (let i = 0; i < str1.length; i++) {
         if (str1[i] !== str2[i]) {
            arr.push({ [str1[i]]: str2[i] });
         }
      }

      return arr;
   }

   return checkTransform(arrLine[0], arrLine[1]);
}

console.log(transform('прввет прикол'));