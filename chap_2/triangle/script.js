'use strict'

let hash = "#";
const trianglePrint = (height) => {
   for (let i = 0; i < height; i++) {
      console.log(hash);
      hash = "#" + hash;
   }
}

trianglePrint(6);