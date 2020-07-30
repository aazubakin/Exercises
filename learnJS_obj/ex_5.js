/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(s) {
   // The function code should be here
   let myObj = {};
   let counter = 0;
   for (let i in s) {
      counter = 0;
      for (let j in s) {
         if (s[j] == s[i]) {
            counter++;
         }
      }
      myObj[s[i]] = counter;
   }
   return myObj;
}

console.log(count('aab'));
