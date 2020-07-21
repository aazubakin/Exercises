'use strict'

const chessboard = () => {
   let hash = "";

   for (let i = 0; i < 8; i++) {

      for (let j = 0; j < 8; j++) {
         if ((j + i) % 2 === 0) {
            hash += " ";
         } else {
            hash += "#";
         }
      }
      hash += "\n";
   }
   console.log(hash);
}

chessboard();