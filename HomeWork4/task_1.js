/* 
1.  Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
    Функция должна расчитывать результат операции, исходя из переданного ей знака. 
    Функция должна проверять корректность введенных чисел и знака операции.
    Все аргументы для функции принять от пользователя.
*/

function calculate(a,b,sign){
    if(!(a && b || a===0 || b===0)){
            console.log("Parameters are not correct"); 
            return undefined;
        } 
            
    switch(sign){
        case '+': {
            return a+b;            
        }
        case '-': {
            return a-b;            
        }
        case '*': {
            return a*b;            
        }
        case '/': {
            if(b>0){
                return a/b;            
            }else{
                console.log("Parameters are not correct"); 
                break;
            } 
        }
        default: {
            console.log("Operetion " + sign + " isn't avalable");
        }
    }
    return undefined;
}

var a,b,sign;
a = +prompt("Enter firs argument");
b = +prompt("Enter second argument");
sign = prompt("Enter sign of operation");;
console.log(calculate(a,b,sign));