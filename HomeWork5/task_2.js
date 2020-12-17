/* 
2.  Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
    Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
    В зависимости от принятого знака операции, вызвать соответствующий метод.
*/

var calculator = {
    a: 0,
    b: 0,
    sign: "",
    checkParameter: function ()  {return ((Boolean(this.a) || this.a === 0) && (Boolean(this.b) || this.b === 0));},
    calculateSum: function () {return this.a + this.b;},
    calculateDifference: function () {return this.a - this.b;},
    calculateMultiplication: function () {return this.a * this.b;},
    calculateDivision: function () {return (this.b !== 0)? this.a / this.b : "Operand b could not be egual 0" ;},
    getResult: function () {
        if(!this.checkParameter()) return "Your parameters are not correct";
        switch(this.sign){
            case "+":  return this.calculateSum(); 
            case "-":  return this.calculateDifference(); 
            case "*":  return this.calculateMultiplication(); 
            case "/":  return this.calculateDivision(); 
            default: return "Your sign is not correct";
        } 
    }
}
calculator.a = +prompt("Enter operand a");
calculator.b = +prompt("Enter operand b");
calculator.sign = prompt("Enter sign");;
console.log(calculator.getResult());