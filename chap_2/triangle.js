'use strict'
/* Write a loop that makes seven calls to console.log to output the following triangle:</p>
   <pre>
      #
      ##
      ###
      ####
      #####
      ######
      #######
*/
let hash = "#";
const trianglePrint = (height) => {
   for (let i = 0; i < height; i++) {
      console.log(hash);
      hash = "#" + hash;
   }
}

trianglePrint(6);