function polindrome(line) {
   line = line.toString();
   let len = line.length;
   let i = 0;
   while (i < Math.floor(line.length / 2)) {
      if (line[i] !== line[len - 1 - i]) return false;
      i++;
   }
   return true;
}


console.log(polindrome('anna'));
console.log(polindrome('walter'));
console.log(polindrome(12321));