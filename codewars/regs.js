function validateUsr(username) {
   res = /([a-z]){4,16}/.test(username);
   return res;
}

/*
console.log(validateUsr('asddsa'));//, true);
console.log(validateUsr('a'));//, false);
console.log(validateUsr('Hass'));//, false);
console.log(validateUsr('Hasdassssssasasasasasaasasasadddddddddddddddsas'));//, false);
console.log(validateUsr(''));//, false);
console.log(validateUsr('____'));//, true);
console.log(validateUsr('012'));//, false);
console.log(validateUsr('p1pp1'));//, true);
console.log(validateUsr('asd43 34'));//, false);
console.log(validateUsr('asd43_34'));//, true);
*/

String.prototype.isLetter = function (letter) {

   return /[a-z]/.test(String(this));
}

console.log("a".isLetter());
//Test.assertEquals("a".isLetter(), true);
//Test.assertEquals("X".isLetter(), true);