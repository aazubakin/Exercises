const calculator = {
   read: function (x, y) {
      this.number1 = x;
      this.number2 = y;
   },
   sum: function () {
      return this.number1 + this.number2;
   },
   mul: function () {
      return this.number1 * this.number2;
   }
};

calculator.read(15, 20);
console.log(calculator.sum());
console.log(calculator.mul());