/* 
 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
*/

var a,b,c, avgVal;

a = +prompt("Enter first number");
b = +prompt("Enter second number");
c = +prompt("Enter Third number");

if(a!=b && a!=c && b!=c) 
    {
        avgVal = (a+b+c)/3; 
        console.log('Avarage Value equal: ' + avgVal); 
    }
else 
    console.log("Error");