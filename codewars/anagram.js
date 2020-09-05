const isAnagram = function (test, origgin) {
   if (test.length !== origgin.length) return false;
   test = test.toLowerCase().split('').sort().join('');
   origgin = origgin.toLowerCase().split('').sort().join('');
   return test === origgin;
}

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("ound", "round"));