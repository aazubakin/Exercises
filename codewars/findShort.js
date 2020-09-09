function findShort(s) {
   const result = [];
   const arr = s.split(' ');
   for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].length);
   }
   return result.sort((a, b) => a - b).shift();
}

console.log(findShort("Ethereum ProofOfWork Dogecoin Steem"));