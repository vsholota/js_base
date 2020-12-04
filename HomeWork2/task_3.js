/* 
3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
*/

var a,b,c,max;

a = +prompt("Enter first number");
b = +prompt("Enter second number");
c = +prompt("Enter Third number");

max = (a>=b && a>=c) ? a : (b>=a && b>=c) ? b:c; // якщо 2 числа однакові і це значення найбільше то поверне це значення

console.log("Maximum of tree digits is: " + max);